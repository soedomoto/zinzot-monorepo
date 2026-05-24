// Translator: ABC News Australia
// Target: https?://(www\.)?abc\.net\.au/news/
// TODO: Implement ABC News Australia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-abc-news-australia.ts");
});

import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ABC News Australia',
      translatorType: 4,
      target: 'https?://(www\.)?abc\.net\.au/news/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-23 00:29:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
