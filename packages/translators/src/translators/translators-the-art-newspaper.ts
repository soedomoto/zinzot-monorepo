// Translator: The Art Newspaper
// Target: ^https?://(www\.)?theartnewspaper\.com/
// TODO: Implement The Art Newspaper translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-art-newspaper.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Art Newspaper',
      translatorType: 4,
      target: '^https?://(www\.)?theartnewspaper\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-13 20:38:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
