// Translator: Wilson Center Digital Archive
// Target: ^https?://digitalarchive\.wilsoncenter\.org/(document|search-results)/
// TODO: Implement Wilson Center Digital Archive translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wilson-center-digital-archive.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wilson Center Digital Archive',
      translatorType: 4,
      target: '^https?://digitalarchive\.wilsoncenter\.org/(document|search-results)/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-05-11 21:19:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
