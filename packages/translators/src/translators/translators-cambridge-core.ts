// Translator: Cambridge Core
// Target: ^https?://www\.cambridge\.org/core/(search\?|journals/|books/|.+/listing?)

import { INJECTED_MESSAGING_KEYS, MESSAGING_SOURCES, type DetectWebResultType, type DetectWebType, type DoWebResultType, type GetSearchType, type TranslatorFunctionsType } from "@/types";
import { attr, text, xpath, xpathText, requestDocument } from "@/utils";
import type { DtoDoiMetadata } from '@zinzot/contracts';
import { defineUnlistedScript } from "..";

function detectWeb(doc: Document, url: string): string | boolean | null {
  // if one of these strings is in the URL, we're almost definitely on a listing
  // page and should immediately return "multiple" if the page contains any
  // results. the checks below (particularly url.includes('/books/')) might
  // falsely return true and lead to an incorrect detection if we continue.
  let multiples = /\/search\?|\/listing\?|\/issue\//;
  if (multiples.test(url) && getSearchResults(doc, true)) {
    return "multiple";
  }
  if (url.includes('/article/')) {
    return "journalArticle";
  }
  if (url.includes('/books/')) {
    if (doc.getElementsByClassName('chapter-wrapper').length > 0) {
      return "bookSection";
    }
    else return "book";
  }

  // now let's check for multiples again, just to be sure. this handles some
  // rare listing page URLs that might not be included in the multiples
  // regex above.
  if (getSearchResults(doc, true)) {
    return "multiple";
  }

  return false;
}

function getSearchResults(doc: Document, checkOnly: boolean): boolean | Record<string, any> {
  var items: Record<string, any> = {};
  var found = false;
  var rows = doc.querySelectorAll(
    'li.title a[href*="/article/"], li.title a[href*="/product/"], li.title a[href*="/books/"], div.results .product-listing-with-inputs-content a[href*="/books/"]'
  );
  for (let row of rows) {
    var href = (row as HTMLAnchorElement).href;
    var title = (row.textContent || "").replace(/\s+/g, " ").trim();
    if (!href || !title) continue;
    if (checkOnly) return true;
    found = true;
    items[href] = title;
  }
  return found ? items : false;
}

async function scrape(doc: Document, url: string): Promise<{ doiMetadata: DtoDoiMetadata | null; pdfLink: string | null }> {
  const doiMetadata: DtoDoiMetadata = {
    title: '',
    author: [],
    issued: undefined,
    URL: url,
  };

  // Determine item type
  let itemType = detectWeb(doc, url);
  if (itemType === "book" || itemType === "bookSection") {
    // For books, try to use RIS format
    let productID = url.replace(/[#?].*/, "").match(/\/([^/]+)$/)?.[1];
    if (productID) {
      let risURL = "/core/services/aop-easybib/export?exportType=ris&productIds="
        + productID + "&citationStyle=apa";
      
      try {
        const risResponse = await fetch(risURL);
        const risText = await risResponse.text();
        
        // Parse RIS format for metadata
        const lines = risText.split('\n');
        for (let line of lines) {
          const [key, ...valueParts] = line.split(' - ');
          const value = valueParts.join(' - ').trim();
          
          switch (key.trim()) {
            case 'TI':
              doiMetadata.title = value;
              break;
            case 'AU':
              // Parse "LastName, FirstName" format
              const parts = value.split(',').map(p => p.trim());
              if (parts.length >= 2) {
                doiMetadata.author?.push({ family: parts[0], given: parts[1] });
              } else {
                doiMetadata.author?.push({ family: value });
              }
              break;
            case 'PY':
              doiMetadata.issued = { 'date-parts': [[parseInt(value)]] };
              break;
            case 'PB':
              doiMetadata.publisher = value;
              break;
            case 'AB':
              doiMetadata.abstract = value;
              break;
            case 'DO':
              doiMetadata.DOI = value;
              break;
            case 'SN':
              doiMetadata.ISBN = [value];
              break;
          }
        }
      } catch (e) {
        console.error("Error parsing RIS:", e);
      }
    }
  } else {
    // For journal articles, extract from HTML metadata
    // Get title from meta tag or h1
    let titleElem = doc.querySelector('meta[name="citation_title"]');
    if (titleElem) {
      doiMetadata.title = titleElem.getAttribute('content') || '';
    } else {
      let h1 = doc.querySelector('#maincontent h1');
      if (h1) {
        doiMetadata.title = h1.textContent?.trim() || '';
      }
    }

    // Get authors from meta tags
    let authorMetas = doc.querySelectorAll('meta[name="citation_author"]');
    for (let meta of authorMetas) {
      let authorName = meta.getAttribute('content');
      if (authorName) {
        // Parse "LastName, FirstName" format
        const parts = authorName.split(',').map(p => p.trim());
        if (parts.length >= 2) {
          doiMetadata.author?.push({ family: parts[0], given: parts[1] });
        } else {
          doiMetadata.author?.push({ family: authorName });
        }
      }
    }

    // Get publication date
    let dateMeta = doc.querySelector('meta[name="citation_publication_date"]');
    if (dateMeta) {
      let dateStr = dateMeta.getAttribute('content') || '';
      let dateMatch = dateStr.match(/(\d{4})/);
      if (dateMatch) {
        doiMetadata.issued = { 'date-parts': [[parseInt(dateMatch[1])]] };
      }
    }

    // Get journal title
    let journalMeta = doc.querySelector('meta[name="citation_journal_title"]');
    if (journalMeta) {
      const content = journalMeta.getAttribute('content');
      if (content) {
        doiMetadata['container-title'] = [content];
      }
    }

    // Get volume
    let volumeMeta = doc.querySelector('meta[name="citation_volume"]');
    if (volumeMeta) {
      let vol = volumeMeta.getAttribute('content');
      if (vol) {
        doiMetadata.volume = vol;
      }
    }

    // Get issue
    let issueMeta = doc.querySelector('meta[name="citation_issue"]');
    if (issueMeta) {
      doiMetadata.issue = issueMeta.getAttribute('content') || '';
    }

    // Get pages
    let pagesMeta = doc.querySelector('meta[name="citation_firstpage"]');
    if (pagesMeta) {
      doiMetadata.page = pagesMeta.getAttribute('content') || '';
    }

    // Get DOI
    let doiMeta = doc.querySelector('meta[name="citation_doi"]');
    if (doiMeta) {
      doiMetadata.DOI = doiMeta.getAttribute('content') || '';
    }

    // Get abstract
    let abstractElem = doc.querySelector('div.abstract');
    if (abstractElem) {
      doiMetadata.abstract = abstractElem.textContent?.trim() || '';
    }

    // Get publisher
    doiMetadata.publisher = "Cambridge University Press";
  }

  // Try to find PDF link
  let pdfLink: string | null = null;
  const pdfMeta = doc.querySelector('meta[name="citation_pdf_url"]');
  if (pdfMeta) {
    pdfLink = pdfMeta.getAttribute('content') || null;
  }
  if (!pdfLink) {
    const pdfLink_el = doc.querySelector('.actions a[target="_blank"][href*=".pdf"]') as HTMLAnchorElement;
    if (pdfLink_el && pdfLink_el.href) {
      pdfLink = pdfLink_el.href;
    }
  }

  return {
    doiMetadata,
    pdfLink,
  };
}

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Cambridge Core',
      translatorType: 4,
      target: '^https?://www\.cambridge\.org/core/(search\?|journals/|books/|.+/listing?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-11-20 15:50:00',
    }
  },
  detectWeb(doc, url) {
    return detectWeb(doc, url);
  },
  async doWeb(doc, url) {
    const type = this.detectWeb ? this.detectWeb(doc, url) : null;
    if (type === "multiple") {
      let results: {
        doiMetadata: DtoDoiMetadata | null;
        pdfLink: string | null;
      }[] = [];

      // Get all article links from search results
      const articles = getSearchResults(doc, false) as Record<string, any>;
      if (!articles) {
        window.postMessage({
          source: MESSAGING_SOURCES.PAGE,
          type: INJECTED_MESSAGING_KEYS.DO_WEB_RESULT,
          payload: results as unknown as DoWebResultType,
        }, "*");
        return Promise.resolve();
      }

      for (const articleUrl in articles) {
        try {
          const resp = await fetch(articleUrl);
          const text = await resp.text();
          const parser = new DOMParser();
          const articleDoc = parser.parseFromString(text, "text/html");
          const result = await scrape(articleDoc, articleUrl);
          results.push(result as any);
        } catch (e) {
          console.error("Error scraping article:", e);
          results.push({ doiMetadata: null, pdfLink: null } as any);
        }
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
  console.log("Hello from translators-cambridge-core.ts");

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
        }).catch((e) => {
          console.error("doWeb failed", e);
        });

        break;

      default:
        return;
    }
  });
});
