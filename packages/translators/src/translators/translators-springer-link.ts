// Translator: Springer Link
// Target: ^https?://link\.springer\.com/(search(/page/\d+)?\?|(article|chapter|book|referenceworkentry|protocol|journal|referencework)/.+)

import { INJECTED_MESSAGING_KEYS, MESSAGING_SOURCES, type DetectWebResultType, type DetectWebType, type DoWebResultType, type GetSearchType, type TranslatorFunctionsType } from "@/types";

import type { DtoDoiMetadata } from "@zinzot/contracts";
import { defineUnlistedScript } from "..";
import { text, xpath, xpathText, requestDocument, fetchDoiMetadata } from "@/utils";

function getAction(url: string): string | null {
  const match = url.match(/^https?:\/\/[^/]+\/([^/?#]+)/);
  return match ? match[1] : null;
}

function getResultList(doc: Document): HTMLElement[] {
  // Search result from list
  let results = Array.from(doc.querySelectorAll('ol.content-item-list li h3 > a, ol.content-item-list li h2 > a')) as HTMLElement[];
  if (results.length) return results;

  // Table of contents
  results = Array.from(doc.querySelectorAll('div.toc ol div.toc-item h3 a')) as HTMLElement[];
  if (results.length) return results;

  // Book TOC
  results = Array.from(doc.querySelectorAll('div.book-toc-container ol div.content-type-list__meta div a')) as HTMLElement[];
  if (results.length) return results;

  // Another TOC format
  results = Array.from(doc.querySelectorAll('div.toc ol li.toc-item p.title a')) as HTMLElement[];
  if (results.length) return results;

  // List group format
  results = Array.from(doc.querySelectorAll('li.c-list-group__item h3 a')) as HTMLElement[];
  if (results.length) return results;

  // Chapter cards with h3 or h4
  results = Array.from(doc.querySelectorAll('li[data-test="chapter"] h4.c-card__title > a, li[data-test="chapter"] h3.c-card__title > a')) as HTMLElement[];
  if (results.length) return results;

  // Chapter title format
  results = Array.from(doc.querySelectorAll('li[data-test="chapter"] [data-test^="chapter-title"] > a')) as HTMLElement[];
  if (results.length) return results;

  // Journal issue articles
  results = Array.from(doc.querySelectorAll('section ol article.c-card-open h3 > a')) as HTMLElement[];
  if (results.length) return results;

  return [];
}

function getDOI(url: string): string | null {
  const match = url.match(/\/(10\.[^#?]+)/);
  return match ? match[1] : null;
}

async function scrape(doc: Document, url: string): Promise<{ doiMetadata: DtoDoiMetadata | null; pdfLink: string | null }> {
  const DOI = getDOI(url);

  if (!DOI) {
    return { doiMetadata: null, pdfLink: null };
  }

  const pdfURL = `/content/pdf/${encodeURIComponent(DOI)}.pdf`;
  let doiMetadata: DtoDoiMetadata = {
    title: '',
    author: [],
    issued: undefined,
    URL: url,
  };

  try {
    doiMetadata = await fetchDoiMetadata(DOI);

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
    console.error("Error scraping Springer Link article:", e);
  }

  return { doiMetadata, pdfLink: pdfURL };
}

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Springer Link',
      translatorType: 4,
      target: '^https?://link\\.springer\\.com/(search(/page/\\d+)?\\?|(article|chapter|book|referenceworkentry|protocol|journal|referencework)/.+)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-22 20:08:47',
    }
  },
  detectWeb(doc: Document, url: string) {
    const action = getAction(url);
    if (!action) return false;

    if (!doc.head || !doc.head.getElementsByTagName('meta').length) {
      console.debug("Springer Link: No head or meta tags");
      return false;
    }

    switch (action) {
      case "search":
      case "journal":
      case "book":
      case "referencework":
        if (getResultList(doc).length > 0) {
          return 'multiple';
        }
        return false;
      case "article":
        return 'journalArticle';
      case "chapter":
      case "referenceworkentry":
      case "protocol":
        const conferenceTitle = doc.querySelector('meta[name="citation_conference_title"]')?.getAttribute('content');
        if (conferenceTitle) {
          return 'conferencePaper';
        } else {
          return 'bookSection';
        }
    }
    return false;
  },
  async doWeb(doc: Document, url: string) {
    const type = this.detectWeb ? this.detectWeb(doc, url) : null;

    if (type === 'multiple') {
      const list = getResultList(doc);
      const items: Record<string, string> = {};

      // Add full book option if on book page
      if (getAction(url) === 'book') {
        items[url] = `[Full Book] ${text(doc, 'header h1')}`;
      }

      for (const item of list) {
        const href = (item as HTMLAnchorElement).href;
        const title = (item.textContent || '').trim();
        if (href && title) {
          items[href] = title;
        }
      }

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
          });
        } catch (e) {
          console.error("Error scraping article:", e);
          results.push({
            doiMetadata: null,
            sourceUrl: itemUrl,
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
        payload: [{ ...result, sourceUrl: url }] as unknown as DoWebResultType,
      }, "*");
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}

export default defineUnlistedScript(() => {
  console.log("Hello from translators-springer-link.ts");

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
