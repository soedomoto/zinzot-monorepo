// Translator: Semantic Scholar
// Target: ^https?://(www\.semanticscholar\.org/(paper/.+|search\?|reader/.+)|pdfs\.semanticscholar\.org/)
// TODO: Implement Semantic Scholar translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-semantic-scholar.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Semantic Scholar',
      translatorType: 4,
      target: '^https?://(www\.semanticscholar\.org/(paper/.+|search\?|reader/.+)|pdfs\.semanticscholar\.org/)',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-11-18 01:12:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
