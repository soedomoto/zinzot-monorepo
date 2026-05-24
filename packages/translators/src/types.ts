/* eslint-disable @typescript-eslint/no-empty-object-type */

import type { DtoDoiMetadata } from '@zinzot/contracts';

export const INJECTED_MESSAGING_KEYS = {
  DETECT_WEB: "DETECT_WEB",
  DETECT_WEB_RESULT: "DETECT_WEB_RESULT",
  DO_GET_SEARCH: "DO_GET_SEARCH",
  GET_SEARCH_RESULT: "GET_SEARCH_RESULT",
  SELECT_ITEMS: "SELECT_ITEMS",
  SELECT_ITEMS_RESULT: "SELECT_ITEMS_RESULT",
  DO_WEB: "DO_WEB",
  DO_WEB_RESULT: "DO_WEB_RESULT",
} as const;

export const MESSAGING_SOURCES = {
  CONTENT: "content",
  PAGE: "page",
  OFFSCREEN: "offscreen",
  BACKGROUND: "background",
} as const;

export const MESSAGING_TARGETS = {
  OFFSCREEN: "offscreen",
  BACKGROUND: "background",
  POPUP: "popup",
  OPTIONS: "options",
} as const;

export type INJECTED_MESSAGING_KEYS = typeof INJECTED_MESSAGING_KEYS[keyof typeof INJECTED_MESSAGING_KEYS];

export interface GetSearchType extends Record<string, string> {}

export type DetectWebType = {}

export type DetectWebResultType = {
    type: string | null;
}

export type DoWebType = {}

export type DoWebResultType = {
    sourceUrl: string;
    doiMetadata: DtoDoiMetadata | null;
}[];

export type TranslatorMetadataType = {
  name: string | null;
  target?: string | null;
  minVersion: string | null;
  maxVersion: string | null;
  priority: number | null;
  inRepository: boolean | null;
  translatorType: number | null;
  browserSupport: string | null;
  lastUpdated: string | null;
  translator?: string | null; // file name of the translator `translators-*.js`
};

export type TranslatorFunctionsType = {
  getAnchors: () => {
    anchor: Element | null;
    url: string | null | undefined;
    pdfUrl: string | null | undefined;
  }[]
  getMetadata: () => TranslatorMetadataType
  getSearchResults?: (doc: Document) => Record<string, string>; // url => title
  detectWeb?: (doc: Document, url: string) => boolean | string | null;
  doWeb?: (doc: Document, url: string, selectedItems?: DoWebResultType, onItemProcessed?: (item: DoWebResultType[number], index?: number) => void) => Promise<DoWebResultType | void>
} | undefined;
