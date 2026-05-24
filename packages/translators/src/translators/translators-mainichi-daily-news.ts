// Translator: Mainichi Daily News
// Target: ^https?://mainichi\.jp/(?:english/)?(articles/|search\?)
// TODO: Implement Mainichi Daily News translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-mainichi-daily-news.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Mainichi Daily News',
      translatorType: 4,
      target: '^https?://mainichi\.jp/(?:english/)?(articles/|search\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-12-17 20:25:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
