/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Translator: ACM Digital Library
// Target: ^https://dl\.acm\.org/(doi|do|profile|toc|topic|keyword|action/doSearch|acmbooks|browse)

import { INJECTED_MESSAGING_KEYS, MESSAGING_SOURCES, type DetectWebResultType, type DetectWebType, type DoWebResultType, type GetSearchType, type TranslatorFunctionsType } from "@/types";
import { attr, text } from "@/utils";
import type { DtoDoiMetadata } from '@zinzot/contracts';
import { defineUnlistedScript } from "..";

let selectedItems: DoWebResultType = [];

function isContentUrl(url: string): boolean {
  return (url.includes('/doi/') || url.includes('/do/')) && !url.includes('/doi/proceedings');
}

function getItemSubtype(doc: Document): RegExpMatchArray | null {
  const extractedContext = attr(doc, 'meta[name=pbContext]', 'content');
  if (!extractedContext) return null;
  const subtypeRegex = /csubtype:string:(\w+)/;
  return extractedContext.match(subtypeRegex);
}

function getSearchResults(doc: Document): Record<string, string> {
  const items: Record<string, string> = {};
  const results = doc.querySelectorAll('.issue-item__title a');

  for (let i = 0; i < results.length; i++) {
    const url = (results[i] as HTMLAnchorElement).href;
    const title = (results[i].textContent || '').trim();
    if (!title || !url) {
      continue;
    }

    if (!isContentUrl(url)) {
      continue;
    }

    items[url] = title;
  }

  return Object.keys(items).length > 0 ? items : {};
}

async function scrapeACM(doc: Document, url: string): Promise<{ metadata: DtoDoiMetadata | null; pdfLink: string | null }> {
  const doi = attr(doc, 'input[name=doiVal]', 'value');

  if (!doi) {
    return { metadata: null, pdfLink: null };
  }

  try {
    // Post to ACM's export endpoint to get CSL JSON
    const lookupEndpoint = 'https://dl.acm.org/action/exportCiteProcCitation';
    const postBody = 'targetFile=custom-bibtex&format=bibTex&dois=' + encodeURIComponent(doi);

    const response = await fetch(lookupEndpoint, {
      method: 'POST',
      body: postBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const returnedText = await response.text();
    const json = JSON.parse(returnedText);
    const cslItem: any = json.items[0][doi];

    if (!cslItem) {
      return { metadata: null, pdfLink: null };
    }

    // Normalize type
    cslItem.type = (cslItem.type || '').toLowerCase().replace('_', '-');

    if (cslItem.type === 'article') {
      cslItem.type = 'article-journal';
    } else if (cslItem.type === 'thesis') {
      delete cslItem.editor;
      if (cslItem.author && cslItem.author.length > 1) {
        cslItem.author = cslItem.author.slice(0, 1);
      }
    }

    if (cslItem.source && (cslItem.source.includes('19') || cslItem.source.includes('20'))) {
      delete cslItem.source;
    }

    // Clean title
    if (cslItem.title) {
      cslItem.title = (cslItem.title as string).replace(/<\/?[^>]+(>|$)/g, '');
    }

    // Extract abstract
    const abstractElements = doc.querySelectorAll('div.article__abstract p, div.abstractSection p');
    const abstract = Array.from(abstractElements)
      .map(x => (x.textContent || '').trim())
      .join('\n\n');
    if (abstract && abstract.toLowerCase() !== 'no abstract available.') {
      cslItem.abstract = abstract;
    }

    // Extract PDF link
    const pdfElement = doc.querySelector('a[title="View PDF"]') as HTMLAnchorElement | null;
    let pdfLink: string | null = null;
    if (pdfElement && pdfElement.href) {
      pdfLink = pdfElement.href;
      if (!cslItem.attachments) {
        cslItem.attachments = [];
      }
      cslItem.attachments.push({
        url: pdfLink,
        title: 'Full Text PDF',
        mimeType: 'application/pdf',
      });
    }

    // Set URL from DOI
    if (cslItem.DOI) {
      cslItem.URL = 'https://dl.acm.org/doi/' + cslItem.DOI;
    } else {
      cslItem.URL = url;
    }

    // Handle journal articles
    if (cslItem.type === 'article-journal') {
      const expandedTitle = text(doc, 'span.epub-section__title');
      if (expandedTitle) {
        if (!cslItem['short-container-title']) {
          cslItem['short-container-title'] = [cslItem['container-title']?.join(', ') || ''];
        }
        cslItem['container-title'] = [expandedTitle];
      }

      if (cslItem.number) {
        const number = (cslItem.number as string).replace('Article', '').trim();
        if (cslItem.page) {
          const pages = (cslItem.page as string).split('–');
          cslItem.page = pages.map(p => number + ':' + p).join('–');
        } else {
          cslItem.page = number;
        }
      }
    }

    // Extract authors if missing
    if (!cslItem.author || cslItem.author.length === 0) {
      const authorElements = doc.querySelectorAll('div.citation span.loa__author-name');
      const authors: any[] = [];
      authorElements.forEach((element) => {
        const name = element.textContent || '';
        const parts = name.split(' ');
        if (parts.length > 0) {
          authors.push({
            family: parts[parts.length - 1],
            given: parts.slice(0, -1).join(' '),
          });
        }
      });
      if (authors.length > 0) {
        cslItem.author = authors;
      }
    }

    // Extract tags as keywords
    const tagElements = doc.querySelectorAll('div.tags-widget a');
    const keywords: string[] = [];
    tagElements.forEach((tag) => {
      const keyword = tag.textContent || '';
      if (keyword) keywords.push(keyword);
    });
    if (keywords.length > 0) {
      cslItem.keywords = keywords;
    }

    // Extract page count
    const numPages = text(doc, 'div.pages-info span');
    if (numPages) {
      // DtoDoiMetadata doesn't have number-of-pages, store in source
      if (!cslItem.source) {
        cslItem.source = '';
      }
      cslItem.source = (cslItem.source || '') + (cslItem.source ? '\n' : '') + `Pages: ${numPages}`;
    }

    // Mark datasets
    const subtype = getItemSubtype(doc);
    if (subtype && subtype[1].toLowerCase() === 'dataset') {
      if (!cslItem.source) {
        cslItem.source = '';
      }
      cslItem.source = (cslItem.source ? cslItem.source + '\n' : '') + 'itemType: data';
    }

    return { metadata: cslItem as DtoDoiMetadata, pdfLink };
  } catch (e) {
    console.error('Error scraping ACM Digital Library article:', e);
    return { metadata: null, pdfLink: null };
  }
}

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ACM Digital Library',
      translatorType: 4,
      target: '^https://dl\\.acm\\.org/(doi|do|profile|toc|topic|keyword|action/doSearch|acmbooks|browse)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-30 05:19:59',
    };
  },
  getSearchResults(doc) {
    return getSearchResults(doc);
  },
  detectWeb(doc, url) {
    if (!isContentUrl(url)) {
      const results = getSearchResults(doc);
      if (Object.keys(results).length > 0) {
        return 'multiple';
      }
      return false;
    }

    const subtypeMatch = getItemSubtype(doc);
    if (!subtypeMatch) {
      return 'journalArticle';
    }

    const subtype = subtypeMatch[1].toLowerCase();

    if (subtype === 'conference') {
      return 'conferencePaper';
    } else if (
      subtype === 'journal' ||
      subtype === 'periodical' ||
      subtype === 'magazine' ||
      subtype === 'newsletter'
    ) {
      return 'journalArticle';
    } else if (subtype === 'report' || subtype === 'rfc') {
      return 'report';
    } else if (subtype === 'thesis') {
      return 'thesis';
    } else if (subtype === 'software') {
      return 'computerProgram';
    } else if (subtype === 'dataset') {
      return 'document';
    } else if (subtype === 'book') {
      const bookTypeRegex = /page:string:([\w ]+)/;
      const extractedContext = attr(doc, 'meta[name=pbContext]', 'content');
      if (extractedContext) {
        const bookType = extractedContext.match(bookTypeRegex);
        if (bookType && bookType[1].toLowerCase() === 'book page') {
          return 'book';
        }
      }
      return 'bookSection';
    }

    return 'journalArticle';
  },

  async doWeb(doc, url, selectedItems = [], onItemProcessed) {
    const type = this.detectWeb ? this.detectWeb(doc, url) : null;

    if (type === 'multiple') {
      // const list = getSearchResults(doc);
      const results: DoWebResultType = [];

      console.log('Zinzot Web Importer: Doing web for multiple items', selectedItems);

      let index = 0;
      for (const { sourceUrl: itemUrl } of selectedItems) {
        try {
          const resp = await fetch(itemUrl);
          const textContent = await resp.text();
          const parser = new DOMParser();
          const itemDoc = parser.parseFromString(textContent, 'text/html');
          const result = await scrapeACM(itemDoc, itemUrl);
          results.push({
            doiMetadata: result.metadata,
            sourceUrl: itemUrl,
          });
        } catch (e) {
          console.error('Error scraping article:', e);
          results.push({
            doiMetadata: null,
            sourceUrl: itemUrl,
          });
        } finally {
          if (onItemProcessed) {
            onItemProcessed({
              doiMetadata: results[index].doiMetadata,
              sourceUrl: itemUrl,
            }, index);
          }
          index++;
        }
      }

      // window.postMessage(
      //   {
      //     source: MESSAGING_SOURCES.PAGE,
      //     type: INJECTED_MESSAGING_KEYS.DO_WEB_RESULT,
      //     payload: results as unknown as DoWebResultType,
      //   },
      //   '*'
      // );

      return results;
    } else {
      const result = await scrapeACM(doc, url);

      // window.postMessage(
      //   {
      //     source: MESSAGING_SOURCES.PAGE,
      //     type: INJECTED_MESSAGING_KEYS.DO_WEB_RESULT,
      //     payload: [{ doiMetadata: result.metadata, sourceUrl: url }] as unknown as DoWebResultType,
      //   },
      //   '*'
      // );

      return [{ doiMetadata: result.metadata, sourceUrl: url }] as unknown as DoWebResultType;
    }
  },

  getAnchors() {
    throw new Error('Function not implemented.');
  },
};

export default defineUnlistedScript(() => {
  console.log('Hello from translators-acm-digital-library.ts');

  window.addEventListener(
    'message',
    (event: MessageEvent<{ source: string; type: INJECTED_MESSAGING_KEYS; payload: DetectWebType | DoWebResultType }>) => {
      if (event.data?.source !== MESSAGING_SOURCES.CONTENT) return;

      if (event.data.type == INJECTED_MESSAGING_KEYS.DO_GET_SEARCH) {
        let searchResults: Record<string, string> = {};

        const type = functions.detectWeb?.(document, window.location.href) || null;
        if (type == 'multiple') {
          searchResults = functions.getSearchResults?.(document) || {};
        } else {
          searchResults[window.location.href] = text(document, 'title') || 'Untitled';
        }

        window.postMessage(
          {
            source: MESSAGING_SOURCES.PAGE,
            type: INJECTED_MESSAGING_KEYS.GET_SEARCH_RESULT,
            payload: searchResults as GetSearchType,
          },
          '*'
        );
      }

      else if (event.data.type == INJECTED_MESSAGING_KEYS.SELECT_ITEMS_RESULT) {
        selectedItems = event.data.payload as unknown as DoWebResultType;
      }

      else if (event.data.type == INJECTED_MESSAGING_KEYS.DETECT_WEB) {
        const type = functions.detectWeb?.(document, window.location.href) || null;

        window.postMessage(
          {
            source: MESSAGING_SOURCES.PAGE,
            type: INJECTED_MESSAGING_KEYS.DETECT_WEB_RESULT,
            payload: { type } as DetectWebResultType,
          },
          '*'
        );
      }

      else if (event.data.type == INJECTED_MESSAGING_KEYS.DO_WEB) {
        functions.doWeb?.(document, window.location.href).then(() => {
          console.log('doWeb completed');
        }).catch((e) => {
          console.error('doWeb failed', e);
        });
      }
    }
  );
});
