// Translator: Nature Publishing Group
// Target: ^https?://(www\.)?nature\.com/([^?/]+/)?(journal|archive|research|topten|search|full|abs|current_issue\.htm|most\.htm|articles/)

import { INJECTED_MESSAGING_KEYS, MESSAGING_SOURCES, type DetectWebResultType, type DetectWebType, type DoWebResultType, type GetSearchType, type TranslatorFunctionsType } from "@/types";

import type { DtoDoiMetadata } from "@zinzot/contracts";
import { defineUnlistedScript } from "..";
import { text, xpath, xpathText, requestDocument } from "@/utils";

function isNature(url: string): boolean {
  return /^https?:\/\/(?:[^/]+\.)?nature\.com/.test(url);
}

function getMultipleNodes(doc: Document, url: string): [NodeListOf<Element>, string, string] {
  const allHNodes = '*[self::h1 or self::h2 or self::h3 or self::h4 or self::h5]';
  let nodex = '';
  let titlex = '';
  let linkx = '';
  let nodes: NodeListOf<Element>;

  if (url.includes('/search/') || url.includes('/most.htm')) {
    // search, "top" lists
    nodex = '//ol[@class="results-list" or @id="content-list"]/li';
    titlex = './' + allHNodes + '/node()[not(self::span)]';
    linkx = './' + allHNodes + '/a';

    nodes = doc.querySelectorAll(nodex) as any;
  } else {
    // Try different styles in order of frequency
    const styles = [
      // ToC
      {
        nodex: '//tr[./td/span[@class="articletitle"]]',
        titlex: './td/span[@class="articletitle"]',
        linkx: './td/a[@class="contentslink" and substring(@href, string-length(@href)-3) != "pdf"][1]'
      },
      // oncogene
      {
        nodex: '//div[child::*[@class="atl"]]',
        titlex: './' + allHNodes + '[last()]/node()[not(self::span)]',
        linkx: './p[@class="links" or @class="articlelinks"]/a[contains(text(),"Full Text") or contains(text(),"Full text")]'
      },
      // embo journal
      {
        nodex: '//ul[@class="articles"]/li',
        titlex: './' + allHNodes + '[@class="article-title"]/node()[not(self::span)]',
        linkx: './ul[@class="article-links"]/li/a[contains(text(),"Full Text") or contains(text(),"Full text")]'
      },
      // nature
      {
        nodex: '//ul[contains(@class,"article-list") or contains(@class,"collapsed-list")]/li',
        titlex: './/' + allHNodes + '/a',
        linkx: './/' + allHNodes + '/a'
      },
      // archive
      {
        nodex: '//table[@class="archive"]/tbody/tr',
        titlex: './td/' + allHNodes + '[last()]/a',
        linkx: './td/' + allHNodes + '[last()]/a',
      },
      // some more ToC
      {
        nodex: '//div[@class="container"]/div[./h4[@class="norm"] and ./p[@class="journal"]/a[@title]]',
        titlex: './h4[@class="norm"]',
        linkx: './p[@class="journal"]/a[@title][1]'
      },
      // some new more ToC
      {
        nodex: '//article',
        titlex: './div/h3',
        linkx: './div/h3/a'
      },
      {
        nodex: '//li[@itemtype="http://schema.org/Article"]',
        titlex: './/h2',
        linkx: './/h2/a'
      }
    ];

    for (let i = 0; i < styles.length; i++) {
      nodex = styles[i].nodex;
      titlex = styles[i].titlex;
      linkx = styles[i].linkx;

      nodes = doc.querySelectorAll(nodex) as any;
      if (nodes.length) break;
    }
  }

  return [nodes!, titlex, linkx];
}

async function scrape(doc: Document, url: string): Promise<{ doiMetadata: DtoDoiMetadata | null; pdfLink: string | null }> {
  const doiMetadata: DtoDoiMetadata = {
    title: '',
    author: [],
    issued: undefined,
    URL: url,
  };

  let pdfLink: string | null = null;

  // Try to get title from various selectors
  let titleText = text(doc, 'h1.c-article-title') || 
                 text(doc, 'h1[class*="title"]') ||
                 text(doc, 'h1');
  if (titleText) {
    doiMetadata.title = titleText.trim();
  }

  // Get authors from meta tags or article metadata
  const authorMeta = doc.querySelector('meta[name="citation_author"]');
  if (authorMeta) {
    const authors = Array.from(doc.querySelectorAll('meta[name="citation_author"]'))
      .map(el => el.getAttribute('content'))
      .filter(Boolean);
    
    doiMetadata.author = authors.map(author => {
      const parts = (author || '').split(',').map(p => p.trim());
      return {
        family: parts[0],
        given: parts[1],
        name: author || undefined,
      };
    });
  }

  // Get publication title
  const journalMeta = doc.querySelector('meta[name="citation_journal_title"]');
  if (journalMeta) {
    doiMetadata['container-title'] = [journalMeta.getAttribute('content') || ''];
  }

  // Get volume
  const volumeMeta = doc.querySelector('meta[name="citation_volume"]');
  if (volumeMeta) {
    doiMetadata.volume = volumeMeta.getAttribute('content') || undefined;
  }

  // Get issue
  const issueMeta = doc.querySelector('meta[name="citation_issue"]');
  if (issueMeta) {
    doiMetadata.issue = issueMeta.getAttribute('content') || undefined;
  }

  // Get publication date
  const dateMeta = doc.querySelector('meta[name="citation_publication_date"]');
  if (dateMeta) {
    const dateValue = dateMeta.getAttribute('content');
    if (dateValue) {
      doiMetadata.issued = { "date-time": dateValue  };
    }
  }

  // Get DOI
  const doiMeta = doc.querySelector('meta[name="citation_doi"]');
  if (doiMeta) {
    doiMetadata.DOI = doiMeta.getAttribute('content') || undefined;
  }

  // Get ISSN
  const issnMeta = doc.querySelector('meta[name="citation_issn"]');
  if (issnMeta) {
    doiMetadata.ISSN = [issnMeta.getAttribute('content') || ''];
  }

  // Get pages
  const pagesMeta = doc.querySelector('meta[name="citation_firstpage"]');
  if (pagesMeta) {
    const firstPage = pagesMeta.getAttribute('content');
    const lastPageMeta = doc.querySelector('meta[name="citation_lastpage"]');
    const lastPage = lastPageMeta?.getAttribute('content');
    if (firstPage && lastPage) {
      doiMetadata.page = `${firstPage}-${lastPage}`;
    } else if (firstPage) {
      doiMetadata.page = firstPage;
    }
  }

  // Get abstract
  const abstractElem = doc.getElementById('abstract-content') ||
                      doc.querySelector('[id*="abstract"]');
  if (abstractElem) {
    doiMetadata['abstract'] = abstractElem.textContent?.trim() || undefined;
  }

  // Get keywords/tags
  const keywords: string[] = [];
  const keywordLinks = doc.querySelectorAll('a[data-track-action*="keyword"]');
  if (keywordLinks.length) {
    Array.from(keywordLinks).forEach(el => {
      if (el.textContent) keywords.push(el.textContent.trim());
    });
  }
  if (keywords.length) {
    doiMetadata['keywords'] = keywords;
  }

  // Try to extract PDF link
  const pdfLink_elem = doc.querySelector('a[data-track-action*="pdf"]') || 
                       doc.querySelector('a[href*=".pdf"]');
  if (pdfLink_elem instanceof HTMLAnchorElement) {
    pdfLink = pdfLink_elem.href || null;
  }

  return { doiMetadata, pdfLink };
}

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Nature Publishing Group',
      translatorType: 4,
      target: '^https?://(www\.)?nature\.com/([^?/]+/)?(journal|archive|research|topten|search|full|abs|current_issue\.htm|most\.htm|articles/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-02-29 20:21:02',
    }
  },
  detectWeb(doc: Document, url: string) {
    if (url.endsWith('.pdf')) return false;
    
    // Single article pages
    if (/\/(full|abs)\/[^/]+($|\?|#)|\/fp\/.+?[?&]lang=ja(?:&|$)|\/articles\//.test(url)) {
      return 'journalArticle';
    }
    
    // Multiple results pages
    if (doc.title.toLowerCase().includes('table of contents') ||
        doc.title.toLowerCase().includes('current issue') ||
        url.includes('/research/') || 
        url.includes('/topten/') ||
        url.includes('/most.htm') ||
        (url.includes('/vaop/') && url.includes('index.html')) ||
        url.includes('sp-q=') ||
        /journal\/v\d+\/n\d+\/index\.html/i.test(url) ||
        /volumes\/\d+\/issues\/\d+/i.test(url) ||
        url.includes('/search?')) {
      const [nodes] = getMultipleNodes(doc, url);
      return nodes.length ? 'multiple' : null;
    }
    
    if (url.includes('/archive/')) {
      if (url.includes('index.htm')) return false;
      if (url.includes('subject.htm')) return false;
      if (url.includes('category.htm') && !url.includes('code=')) return false;
      const [nodes] = getMultipleNodes(doc, url);
      return nodes.length ? 'multiple' : null;
    }
    
    return false;
  },
  async doWeb(doc: Document, url: string) {
    const type = this.detectWeb ? this.detectWeb(doc, url) : null;
    
    if (type === 'multiple') {
      const [nodes, titlex, linkx] = getMultipleNodes(doc, url);
      const items: Record<string, any> = {};

      for (let i = 0; i < nodes.length; i++) {
        const titleEl = nodes[i].querySelector(titlex) as HTMLElement;
        const linkEl = nodes[i].querySelector(linkx) as HTMLAnchorElement;
        
        if (titleEl && linkEl && linkEl.href) {
          const title = titleEl.textContent?.trim() || '';
          if (title) {
            items[linkEl.href] = title;
          }
        }
      }

      const urls = Object.keys(items);
      const results: DoWebResultType = [];

      for (const articleUrl of urls) {
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
    } else {
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
  console.log("Hello from translators-nature-publishing-group.ts");

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
