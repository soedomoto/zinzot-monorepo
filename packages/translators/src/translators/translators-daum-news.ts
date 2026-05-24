// Translator: Daum News
// Target: ^https?://news\.v\.daum\.net/v/
// TODO: Implement Daum News translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-daum-news.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Daum News',
      translatorType: 4,
      target: '^https?://news\.v\.daum\.net/v/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 16:41:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
