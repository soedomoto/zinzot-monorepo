// Translator: Silverchair
// Target: /(article|fullarticle|advance-article|advance-article-abstract|article-abstract|book|edited-volume)(/|\.aspx)|search-results?|\/issue(/|s\.aspx|$)

import { INJECTED_MESSAGING_KEYS, MESSAGING_SOURCES, type DetectWebResultType, type DetectWebType, type DoWebResultType, type GetSearchType, type TranslatorFunctionsType } from "@/types";

import type { DtoDoiMetadata } from "@zinzot/contracts";
import { defineUnlistedScript } from "..";
import { text, xpath, xpathText, requestDocument } from "@/utils";

function getArticleId(doc: Document): string | null {
  let id = doc.querySelector('.citation-download-wrap input[name="resourceId"]')?.getAttribute('value');
  if (!id) {
    id = doc.querySelector('a[data-article-id]')?.getAttribute('data-article-id');
  }
  if (!id) {
    id = doc.querySelector('[data-resource-id]')?.getAttribute('data-resource-id');
  }
  return id || null;
}

function getSearchResults(doc: Document, checkOnly: boolean = false): Record<string, string> | boolean {
  const items: Record<string, string> = {};
  let found = false;
  
  // First one is issue, 2nd one search results
  const rows = doc.querySelectorAll('#ArticleList h5.item-title>a, .al-title a[href*="article"], .al-article-items > .customLink > a[href*="article"], a.tocLink');
  
  for (let row of rows) {
    const href = (row as HTMLAnchorElement).href;
    const title = (row.textContent || '').trim();
    
    if (!href || !title) continue;
    if (checkOnly) return true;
    
    found = true;
    items[href] = title;
  }
  
  return found ? items : false;
}

async function scrape(doc: Document, url: string): Promise<{ doiMetadata: DtoDoiMetadata | null; pdfLink: string | null }> {
  const id = getArticleId(doc);
  
  if (!id) {
    return { doiMetadata: null, pdfLink: null };
  }
  
  let type = doc.querySelector('.citation-download-wrap input[name="resourceType"]')?.getAttribute('value');
  if (!type) {
    // Determine type based on URL
    if (url.includes("/chapter/") || url.includes("/chapter-abstract/")) {
      type = "5"; // bookSection
    } else {
      type = "3"; // journalArticle
    }
  }
  
  const chapterTitle = text(doc, '.chapter-title-without-label');
  const risURL = `/Citation/Download?resourceId=${id}&resourceType=${type}&citationFormat=0`;
  
  let pdfURL = doc.querySelector('a.article-pdfLink')?.getAttribute('href') || null;
  if (!pdfURL) {
    pdfURL = doc.querySelector('a#pdf-link')?.getAttribute('data-article-url') || null;
  }
  
  const doiMetadata: DtoDoiMetadata = {
    title: '',
    author: [],
    issued: undefined,
    URL: url,
  };
  
  try {
    // Fetch RIS format citation
    const risResponse = await fetch(risURL);
    const risText = await risResponse.text();
    
    if (risText.includes('We are sorry, but we are experiencing unusual traffic at this time.')) {
      throw new Error('Rate-limited');
    }
    
    // Parse RIS format - extract key fields
    const lines = risText.split('\n');
    
    for (const line of lines) {
      const [key, ...valueParts] = line.split(/\s*-\s*/);
      const value = valueParts.join(' - ').trim();
      
      if (!value) continue;
      
      switch (key) {
        case 'TI':
          doiMetadata.title = value;
          break;
        case 'AU':
          if (!doiMetadata.author) doiMetadata.author = [];
          const nameParts = value.split(',').map(p => p.trim());
          doiMetadata.author.push({
            family: nameParts[0],
            given: nameParts[1],
            name: value,
          });
          break;
        case 'T2':
        case 'JO':
          doiMetadata['container-title'] = [value];
          break;
        case 'VL':
          doiMetadata.volume = value;
          break;
        case 'IS':
          doiMetadata.issue = value;
          break;
        case 'DA':
        case 'PY':
          if (!doiMetadata.issued) {
            doiMetadata.issued = { "date-time": value  };
          }
          break;
        case 'DO':
          doiMetadata.DOI = value;
          break;
        case 'SN':
          if (!doiMetadata.ISSN) {
            doiMetadata.ISSN = [];
          }
          if (typeof doiMetadata.ISSN === 'string') {
            doiMetadata.ISSN = [doiMetadata.ISSN];
          }
          (doiMetadata.ISSN as string[]).push(value);
          break;
        case 'SP':
        case 'EP':
          if (key === 'SP' && !doiMetadata.page) {
            doiMetadata.page = value;
          }
          break;
        case 'AB':
          doiMetadata['abstract'] = value;
          break;
      }
    }
    
    // Override title if chapter title exists
    if (chapterTitle) {
      doiMetadata.title = chapterTitle;
    }
    
    // Add PDF if available
    if (pdfURL) {
      if (!doiMetadata.attachments) {
        doiMetadata.attachments = [];
      }
      doiMetadata.attachments.push({
        url: pdfURL,
        title: 'Full Text PDF',
        mimeType: 'application/pdf',
      });
    }
    
  } catch (e) {
    console.error("Error scraping Silverchair article:", e);
  }
  
  return { doiMetadata, pdfLink: pdfURL };
}

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Silverchair',
      translatorType: 4,
      target: '/(article|fullarticle|advance-article|advance-article-abstract|article-abstract|book|edited-volume)(/|\.aspx)|search-results?|\/issue(/|s\.aspx|$)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 280,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-13 18:25:34',
    }
  },
  detectWeb(doc: Document, url: string) {
    const articleRegex = /\/(article|fullarticle|advance-article|advance-article-abstract|article-abstract|chapter|chapter-abstract)(\/|\.aspx)/;
    
    if (articleRegex.test(url)) {
      if (getArticleId(doc)) {
        if (url.includes("/chapter/") || url.includes("/chapter-abstract/")) {
          return 'bookSection';
        } else {
          return 'journalArticle';
        }
      }
    } else if (getSearchResults(doc, true)) {
      return 'multiple';
    }
    
    return false;
  },
  async doWeb(doc: Document, url: string) {
    const type = this.detectWeb ? this.detectWeb(doc, url) : null;
    
    if (type === 'multiple') {
      const items = getSearchResults(doc, false) as Record<string, string>;
      const results: DoWebResultType = [];

      for (const itemUrl of Object.keys(items)) {
        try {
          const resp = await fetch(itemUrl);
          const text = await resp.text();
          const parser = new DOMParser();
          const itemDoc = parser.parseFromString(text, "text/html");
          const result = await scrape(itemDoc, itemUrl);
          results.push({
            ...result,
            sourceUrl: itemUrl,
            
            // pdfHashName: null,
          });
        } catch (e) {
          console.error("Error scraping article:", e);
          results.push({
            doiMetadata: null,
            
            sourceUrl: '',
            
            // pdfHashName: null,
          });
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
  console.log("Hello from translators-silverchair.ts");

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
