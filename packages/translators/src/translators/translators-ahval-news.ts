// Translator: Ahval News
// Target: ^https?://ahvalnews\.com/
// TODO: Implement Ahval News translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ahval-news.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Ahval News',
      translatorType: 4,
      target: '^https?://ahvalnews\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-12 20:49:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
