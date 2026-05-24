// Translator: ScienceDirect
// Target: ^https?://[^/]*science-?direct\.com[^/]*/((science/)?(article/|(journal|bookseries|book|handbook)/\d)|search[?/]|journal/[^/]+/vol)
// TODO: Implement ScienceDirect translator

import { INJECTED_MESSAGING_KEYS, MESSAGING_SOURCES, type DetectWebResultType, type DetectWebType, type DoWebResultType, type GetSearchType, type TranslatorFunctionsType } from "@/types";

import type { DtoDoiMetadata } from "@zinzot/contracts";
import { defineUnlistedScript } from "..";
import { xpath, xpathText, monitorDOMChanges, getFormInput, requestText, formValuesToPostData, parseRIS, attr, text, requestDocument, chunkArray, fetchDoiMetadata } from "@/utils";


async function getPDFLink(doc: Document): Promise<string | null | false> {
  // No PDF access ("Get Full Text Elsewhere" or "Check for this article elsewhere")
  if (doc.querySelector('.accessContent') || doc.querySelector('.access-options-link-text') || doc.querySelector('#check-access-popover')) {
    return false;
  }

  // Some pages still have the PDF link available
  var pdfURL = attr(doc, '#pdfLink', 'href');
  if (!pdfURL) pdfURL = attr(doc, '[name="citation_pdf_url"]', 'content');
  if (pdfURL && pdfURL != '#') {
    return parseIntermediatePDFPage(pdfURL);
  }

  // If intermediate page URL is available, use that directly
  var intermediateURL = attr(doc, '.PdfEmbed > object', 'data');
  if (intermediateURL) {
    if (/[?&]isDTMRedir=(Y|true)/i.test(intermediateURL)) {
      return intermediateURL;
    }
    else {
      return parseIntermediatePDFPage(intermediateURL);
    }
  }

  // Simulate a click on the "Download PDF" button to open the menu containing the link with the URL
  // for the intermediate page, which doesn't seem to be available in the DOM after the page load.
  // This is an awful hack, and we should look out for a better way to get the URL, but it beats
  // refetching the original source. Works and should be imperceptible to users
  // when run from the browser, does not work from non-browser translation
  // environments (e.g. Find Available PDFs in the client). In those cases we
  // fall back to approach #3: embedded JSON metadata.
  var pdfLink = doc.querySelector('#pdfLink') as HTMLElement;
  if (pdfLink) {
    // Just in case
    try {
      pdfLink.click();
      intermediateURL = attr(doc, '.PdfDropDownMenu a', 'href');
      doc.body.click();
    }
    catch (e) {
      console.error(e);
    }
    if (intermediateURL) {
      return parseIntermediatePDFPage(intermediateURL);
    }
  }

  // On some institutional networks with access to ScienceDirect, the site
  // serves JSON metadata probably used to preload dynamic content without a
  // separate network request. If we find it, we can take advantage of it to
  // grab the PDF url's parts directly, constructing it in the same way that
  // the site's frontend JavaScript would.
  var jsonText = text(doc, 'script[type="application/json"]');
  if (jsonText) {
    try {
      const json = JSON.parse(jsonText);
      let urlMetadata = json?.article?.pdfDownload?.urlMetadata;

      let path = urlMetadata.path;
      let pdfExtension = urlMetadata.pdfExtension;
      let pii = urlMetadata.pii;
      let md5 = urlMetadata.queryParams.md5;
      let pid = urlMetadata.queryParams.pid;
      if (path && pdfExtension && pii && md5 && pid) {
        pdfURL = `/${path}/${pii}${pdfExtension}?md5=${md5}&pid=${pid}`;
        console.debug("Created PDF URL from JSON data: " + pdfURL);
        return pdfURL;
      }
      else {
        console.debug("Missing elements in JSON data required for URL creation");
      }
    }
    catch (e) {
      console.debug(e, 2);
    }
  }

  // In most cases, appending the suffix seen below to the page's canonical URL
  // should get us directly to the PDF; it'll yield a URL similar to the one
  // created by the JSON but without the md5 and pid parameters. It should be
  // enough to get us through even without those parameters.
  pdfURL = attr(doc, 'link[rel="canonical"]', 'href');
  if (pdfURL) {
    pdfURL = pdfURL + '/pdfft?download=true';
    console.debug("Trying to construct PDF URL from canonical link: " + pdfURL);
    return pdfURL;
  }

  // If none of that worked for some reason, get the URL from the initial HTML,
  // where it is present, by fetching the page source again. Hopefully this is
  // never actually used.
  var url = doc.location.href;
  console.debug("Refetching HTML for PDF link");
  let reloadedDoc = await requestDocument(url);
  intermediateURL = attr(reloadedDoc, '.pdf-download-btn-link', 'href');
  // console.debug("Intermediate PDF URL: " + intermediateURL);
  if (intermediateURL) {
    return parseIntermediatePDFPage(intermediateURL);
  }
  return false;
}

async function parseIntermediatePDFPage(url: string) {
  // Get the PDF URL from the meta refresh on the intermediate page
  let doc = await requestDocument(url);
  var pdfURL = attr(doc, 'meta[HTTP-EQUIV="Refresh"]', 'CONTENT');
  var otherRedirect = attr(doc, '#redirect-message a', 'href');
  // console.debug("Meta refresh URL: " + pdfURL);
  if (pdfURL) {
    // Strip '0;URL='
    var matches = pdfURL.match(/\d+;URL=(.+)/);
    pdfURL = matches ? matches[1] : null;
  }
  else if (otherRedirect) {
    pdfURL = otherRedirect;
  }
  else if (url.includes('.pdf')) {
    // Sometimes we are already on the PDF page here and therefore
    // can simply use the original url as pdfURL.
    pdfURL = url;
  }
  return pdfURL;
}

function getArticleList(doc: Document): Element[] {
  let articlePaths = [
    '//table[@class="resultRow"]/tbody/tr/td[2]/a',
    '//table[@class="resultRow"]/tbody/tr/td[2]/h3/a',
    '//td[@class="nonSerialResultsList"]/h3/a',
    '//div[@id="bodyMainResults"]//li[contains(@class,"title")]//a',
    '//h2//a[contains(@class, "result-list-title-link")]',
    '//ol[contains(@class, "article-list") or contains(@class, "article-list-items")]//a[contains(@class, "article-content-title")]',
    '//li[contains(@class, "list-chapter")]//h2//a',
    '//h4[contains(@class, "chapter-title")]/a'
  ];
  return xpath(doc, '('
    + articlePaths.join('|')
    + ')[not(contains(text(),"PDF (") or contains(text(), "Related Articles"))]'
  );
}

function getISBN(doc: Document): string | false {
  const isbn = xpathText(doc, '//td[@class="tablePubHead-Info"]//span[@class="txtSmall"]');
  if (!isbn) return false;

  let isbnN = isbn.match(/ISBN:\s*([-\d]+)/);
  if (!isbnN) return false;

  return isbnN[1].replace(/[-\s]/g, '');
}

async function processRIS(doc: Document, risText: string, isSearchResult: boolean) {
  const doiMetadata = await parseRIS(risText);
  const pdfLink = await getPDFLink(doc);

  return { doiMetadata, pdfLink };
}

async function scrape(doc: Document, url: string) {
  const citationDoi: string | RegExpMatchArray | null = xpathText(doc, '//meta[@name="citation_doi"]/@content');
  if (citationDoi) {
    const doiMetadata = await fetchDoiMetadata(citationDoi);
    const pdfLink = await getPDFLink(doc);
    return { doiMetadata, pdfLink };
  } else {
    throw new Error("No DOI found on page.");
  }

  // // On most page the export form uses the POST method
  // let form = xpath(doc, '//form[@name="exportCite"]')[0] as HTMLFormElement;
  // if (form) {
  //   var values = getFormInput(form);
  //   values['citation-type'] = 'RIS';
  //   values.format = 'cite-abs';
  //   let text = await requestText(form.action, {
  //     body: formValuesToPostData(values)
  //   });
  //   return processRIS(doc, text, isSearchResult);
  // }

  // // On newer pages, there is an GET formular which is only there if
  // // the user click on the export button, but we know how the url
  // // in the end will be built.
  // form = xpath(doc, '//div[@id="export-citation"]//button')[0] as HTMLFormElement;
  // if (form) {
  //   let pii: string | RegExpMatchArray | null = xpathText(doc, '//meta[@name="citation_pii"]/@content');
  //   if (!pii) {
  //     pii = url.match(/\/pii\/([^#?]+)/);
  //     if (pii) {
  //       pii = pii[1];
  //     }
  //     else {
  //       console.warn("cannot find pii");
  //     }
  //   }
  //   if (pii) {
  //     let risUrl = '/sdfe/arp/cite?pii=' + pii + '&format=application%2Fx-research-info-systems&withabstract=true';
  //     let text = await requestText(risUrl);
  //     return processRIS(doc, text, isSearchResult);
  //   }
  // }


  // // On some older article pages, there seems to be a different form
  // // that uses GET
  // form = doc.getElementById('export-form') as HTMLFormElement;
  // if (form) {
  //   let risUrl = form.action
  //     + '?export-format=RIS&export-content=cite-abs';
  //   let text = await requestText(risUrl);
  //   return processRIS(doc, text, isSearchResult);
  // }

  // throw new Error("Could not scrape metadata via known methods");
}

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ScienceDirect',
      translatorType: 4,
      target: '^https?://[^/]*science-?direct\.com[^/]*/((science/)?(article/|(journal|bookseries|book|handbook)/\d)|search[?/]|journal/[^/]+/vol)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-10-03 14:35:00',
    }
  },
  detectWeb(doc: Document, url: string) {
    if (!doc.body.textContent.trim()) return false;

    if ((url.includes("_ob=DownloadURL"))
      || doc.title == "ScienceDirect Login"
      || doc.title == "ScienceDirect - Dummy"
      || (url.includes("/science/advertisement/"))) {
      return false;
    }

    if ((url.includes("pdf")
      && !url.includes("_ob=ArticleURL")
      && !url.includes("/article/"))
      || url.search(/\/(?:journal|bookseries|book|handbook)\//) !== -1) {
      if (getArticleList(doc).length > 0) {
        return "multiple";
      }
      else {
        return false;
      }
    }

    if (url.search(/\/search[?/]/) != -1) {
      if (getArticleList(doc).length > 0) {
        return "multiple";
      }
      else if (doc.querySelector('.LoadingOverlay.show')) {
        // monitor and update the toolbar icon when results have loaded
        monitorDOMChanges(doc.querySelector('.results-container'));
        return false;
      }
    }
    if (!new URL(url).pathname.includes("pdf")) {
      // Book sections have the ISBN in the URL
      if (url.includes("/B978")) {
        return "bookSection";
      }
      else if (getISBN(doc)) {
        if (getArticleList(doc).length) {
          return "multiple";
        }
        else {
          return "book";
        }
      }
      else {
        return "journalArticle";
      }
    }
    return false;
  },
  async doWeb(doc: Document, url: string) {
    const type = this.detectWeb ? this.detectWeb(doc, url) : null;
    if (type === "multiple") {
      let results: {
        doiMetadata: DtoDoiMetadata;
        pdfLink: string | false | null;
      }[] = [];

      // for (const articles of chunkArray(getArticleList(doc), 10)) {
      //   const _results = await Promise.all(articles.map(async (article) => {
      //     const href = (article as HTMLAnchorElement).href;
      //     const resp = await fetch(href);
      //     const text = await resp.text();
      //     const parser = new DOMParser();
      //     const articleDoc = parser.parseFromString(text, "text/html");
      //     return scrape(articleDoc, href, true);
      //   }));

      //   results = results.concat(_results);
      //   await new Promise(resolve => setTimeout(resolve, 5000));
      // }

      for (const article of getArticleList(doc)) {
        const href = (article as HTMLAnchorElement).href;
        const resp = await fetch(href);
        const text = await resp.text();
        const parser = new DOMParser();
        const articleDoc = parser.parseFromString(text, "text/html");
        const result = await scrape(articleDoc, href);
        results.push(result as any);
      }

      window.postMessage({
        source: MESSAGING_SOURCES.PAGE,
        type: INJECTED_MESSAGING_KEYS.DO_WEB_RESULT,
        payload: results as unknown as DoWebResultType,
      }, "*");

      return Promise.resolve();
    }
    else {
      const result = (await scrape(doc, url)) as any;

      window.postMessage({
        source: MESSAGING_SOURCES.PAGE,
        type: INJECTED_MESSAGING_KEYS.DO_WEB_RESULT,
        payload: [result] as unknown as DoWebResultType,
      }, "*");
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}

export default defineUnlistedScript(() => {
  console.log("Hello from translators-sciencedirect.ts");

  window.addEventListener("message", (event: MessageEvent<{ source: string, type: INJECTED_MESSAGING_KEYS, payload: DetectWebType }>) => {
    if (event.data?.source !== MESSAGING_SOURCES.CONTENT) return;

    switch (event.data.type) {
      case INJECTED_MESSAGING_KEYS.DETECT_WEB:
        const type = functions.detectWeb?.(document, window.location.href) || null;

        window.postMessage({
          source: MESSAGING_SOURCES.PAGE,
          type: INJECTED_MESSAGING_KEYS.DETECT_WEB_RESULT,
          payload: { type } as DetectWebResultType,
        }, "*");

        break;

      case INJECTED_MESSAGING_KEYS.DO_WEB:
        functions.doWeb?.(document, window.location.href).then(() => {
          console.log("doWeb completed");
        }).catch((e: any) => {
          console.error("doWeb failed", e);
        });

        break;

      default:
        return;
    }
  });
});