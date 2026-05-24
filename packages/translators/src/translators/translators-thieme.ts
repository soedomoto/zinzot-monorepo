// Translator: Thieme
// Target: ^https?://(www\.)?thieme-connect\.com/products/
// TODO: Implement Thieme translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-thieme.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Thieme',
      translatorType: 4,
      target: '^https?://(www\.)?thieme-connect\.com/products/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-10 22:59:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
