// Translator: IMDb
// Target: ^https?://www\.imdb\.com/
// TODO: Implement IMDb translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-imdb.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IMDb',
      translatorType: 4,
      target: '^https?://www\.imdb\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-03-31 22:02:24',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
