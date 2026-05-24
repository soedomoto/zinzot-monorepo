// Translator: Pajhwok Afghan News
// Target: ^https?://pajhwok\.com/
// TODO: Implement Pajhwok Afghan News translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pajhwok-afghan-news.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Pajhwok Afghan News',
      translatorType: 4,
      target: '^https?://pajhwok\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-16 03:38:53',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
