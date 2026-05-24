// Translator: Bloomsbury Food Library
// Target: ^https?://(www\.)?bloomsburyfoodlibrary\.com/
// TODO: Implement Bloomsbury Food Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bloomsbury-food-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bloomsbury Food Library',
      translatorType: 4,
      target: '^https?://(www\.)?bloomsburyfoodlibrary\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-03 01:17:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
