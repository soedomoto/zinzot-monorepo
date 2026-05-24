import type { DtoDoiMetadata } from '@zinzot/contracts';

export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export function attr(doc: Document, selector: string, attributeName: string): string | null {
  const element = doc.querySelector(selector);
  if (!element) return null;
  return element.getAttribute(attributeName);
}

export function text(doc: Document, selector: string): string | null {
  const element = doc.querySelector(selector);
  if (!element) return null;
  return element.textContent;
}

export function xpath(doc: Document, xpathStr: string): Element[] {
  const result = doc.evaluate(xpathStr, doc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  const elements: Element[] = [];
  for (let i = 0; i < result.snapshotLength; i++) {
    elements.push(result.snapshotItem(i) as Element);
  }
  return elements;
}

export function xpathText(doc: Document, xpathStr: string): string | null {
  const result = doc.evaluate(xpathStr, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  return result.singleNodeValue?.textContent || null;
}

export function monitorDOMChanges(element: Element | null, callback?: () => void): MutationObserver | null {
  if (!element) return null;
  const observer = new MutationObserver(() => {
    if (callback) callback();
  });
  observer.observe(element, { childList: true, subtree: true, attributes: true });
  return observer;
}

export function getFormInput(form: HTMLFormElement): { [key: string]: string } {
  const inputs = form.elements;
  const values: Record<string, string> = {};
  for (let i = 0; i < inputs.length; i++) {
    const inp = inputs[i] as HTMLInputElement;
    if (!inp.name) continue;
    values[inp.name] = inp.value;
  }

  return values;
}

export function formValuesToPostData(values: Record<string, string>): string {
  return Object.entries(values)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export async function requestText(
  url: string,
  options?: { body?: string; headers?: Record<string, string> }
): Promise<string> {
  const fetchOptions: RequestInit = {
    method: options?.body ? 'POST' : 'GET',
  };

  if (options?.body) {
    fetchOptions.body = options.body;
    fetchOptions.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...options.headers,
    };
  } else if (options?.headers) {
    fetchOptions.headers = options.headers;
  }

  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

export async function requestDocument(
  url: string,
  options?: { body?: string; headers?: Record<string, string> }
): Promise<Document> {
  const htmlText = await requestText(url, options);
  const parser = new DOMParser();
  return parser.parseFromString(htmlText, 'text/html');
}

export async function fetchDoiMetadata(doi: string): Promise<DtoDoiMetadata> {
  const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}`;
  return await requestText(url)
    .then(t => JSON.parse(t) as { message: DtoDoiMetadata })
    .then(data => data.message)
}

async function risToDOIMetadata(risData: Record<string, string | string[]>): Promise<DtoDoiMetadata> {
  const metadata: DtoDoiMetadata = {};

  // Basic metadata
  if (risData['TI']) {
    metadata.title = risData['TI'] as string;
  }

  if (risData['AB']) {
    metadata.abstract = risData['AB'] as string;
  }

  // Authors - convert from strings to Contributor objects
  if (risData['AU']) {
    const authors = Array.isArray(risData['AU']) ? risData['AU'] : [risData['AU']];
    metadata.author = authors.map((author) => {
      const parts = (author as string).split(',').map(p => p.trim());
      return {
        family: parts[0] || undefined,
        given: parts[1] || undefined,
      };
    });
  }

  // Editors - convert from strings to Contributor objects
  if (risData['ED']) {
    const editors = Array.isArray(risData['ED']) ? risData['ED'] : [risData['ED']];
    metadata.editor = editors.map((editor) => {
      const parts = (editor as string).split(',').map(p => p.trim());
      return {
        family: parts[0] || undefined,
        given: parts[1] || undefined,
      };
    });
  }

  // Publication year
  if (risData['PY']) {
    const year = parseInt(risData['PY'] as string, 10);
    if (!isNaN(year)) {
      metadata.issued = {
        'date-parts': [[year]],
      };
    }
  }

  // Journal/Container title
  if (risData['JO']) {
    metadata['container-title'] = [risData['JO'] as string];
  }

  // Volume
  if (risData['VL']) {
    metadata.volume = risData['VL'] as string;
  }

  // Issue
  if (risData['IS']) {
    metadata.issue = risData['IS'] as string;
  }

  // Pages
  if (risData['SP'] && risData['EP']) {
    metadata.page = `${risData['SP']}-${risData['EP']}`;
    metadata['first-page'] = risData['SP'] as string;
    metadata['last-page'] = risData['EP'] as string;
  } else if (risData['SP']) {
    metadata.page = risData['SP'] as string;
    metadata['first-page'] = risData['SP'] as string;
  }

  // DOI
  if (risData['DO']) {
    metadata.DOI = risData['DO'] as string;
  }

  // URL
  if (risData['UR']) {
    metadata.URL = risData['UR'] as string;
  }

  // Publisher
  if (risData['PB']) {
    metadata.publisher = risData['PB'] as string;
  }

  // Type mapping
  if (risData['TY']) {
    const typeMap: Record<string, string> = {
      'JOUR': 'journal-article',
      'BOOK': 'book',
      'CHAP': 'book-chapter',
      'CONF': 'proceedings-article',
      'THES': 'thesis',
      'RPRT': 'report',
      'WEB': 'webpage',
      'NEWS': 'newspaper-article',
      'GENERIC': 'document',
    };
    metadata.type = typeMap[risData['TY'] as string] || 'document';
  }

  return await requestText(`https://api.crossref.org/works/${metadata.DOI?.replace('https://doi.org/', '')}`)
    .then(t => JSON.parse(t) as { message: DtoDoiMetadata })
    .then(data => data.message)
    .catch(() => metadata); // Return whatever we have if Crossref fetch fails
}

export async function parseRIS(risText: string): Promise<DtoDoiMetadata> {
  const parsedRIS: Record<string, string | string[]> = {};
  const lines = risText.split('\n');

  for (const line of lines) {
    const match = line.match(/^([A-Z]{2,})\s*-\s*(.*)$/);
    if (!match) continue;

    const tag = match[1];
    const value = match[2].trim();

    // Handle multi-value fields (like authors)
    if (tag === 'AU' || tag === 'ED') {
      if (!parsedRIS[tag]) {
        parsedRIS[tag] = [];
      }
      (parsedRIS[tag] as string[]).push(value);
    } else if (parsedRIS[tag]) {
      // For other tags, keep the last value or concatenate if needed
      if (Array.isArray(parsedRIS[tag])) {
        (parsedRIS[tag] as string[]).push(value);
      } else {
        parsedRIS[tag] = value;
      }
    } else {
      parsedRIS[tag] = value;
    }
  }

  return risToDOIMetadata(parsedRIS);
}

export async function hashPdfContent(content: Uint8Array): Promise<string> {
  // Use Web Crypto API to hash the content
  const hashBuffer = await crypto.subtle.digest("SHA-256", content.buffer as ArrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function uint8ArrayToBase64(uint8Array: Uint8Array): string {
  // Convert Uint8Array to base64 string
  // Use a chunked approach to avoid call stack size exceeded
  const chunkSize = 8192;
  let binaryString = '';

  for (let i = 0; i < uint8Array.length; i += chunkSize) {
    const chunk = uint8Array.subarray(i, i + chunkSize);
    binaryString += String.fromCharCode(...chunk);
  }

  return btoa(binaryString);
}

// ============================================================================
// REQUEST DEDUPLICATION MANAGEMENT
// ============================================================================

// Request deduplication map: key -> AbortController
const pendingRequests = new Map<string, AbortController>();

/**
 * Manages request deduplication by tracking pending requests and cancelling duplicates.
 * If a request with the same key is already pending, it will be cancelled before
 * starting a new one.
 * 
 * @param requestKey - Unique identifier for the request (e.g., "library-items:123:1:10")
 * @returns AbortController for the current request with abort signal
 */
export function manageDuplicateRequest(requestKey: string): AbortController {
  // If there's a pending request with the same key, cancel it
  const existingController = pendingRequests.get(requestKey);
  if (existingController) {
    existingController.abort();
    console.log(`Cancelled duplicate request: ${requestKey}`);
  }

  // Create a new controller for this request
  const controller = new AbortController();
  pendingRequests.set(requestKey, controller);

  // Clean up the pending request when it completes (regardless of success/failure)
  Promise.resolve().then(() => {
    // Use a microtask to delay cleanup
    controller.signal.addEventListener('abort', () => {
      pendingRequests.delete(requestKey);
    });
  }).catch(() => {
    // Ensure cleanup happens even if promise fails
    pendingRequests.delete(requestKey);
  });

  return controller;
}

/**
 * Manually clean up a pending request from the deduplication map.
 * Call this after a request completes to ensure it doesn't stay in the map.
 * 
 * @param requestKey - The request key to clean up
 */
export function cleanupPendingRequest(requestKey: string): void {
  pendingRequests.delete(requestKey);
}