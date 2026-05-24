// Translator: arXiv Vanity
// Target: ^https?://www\.arxiv-vanity\.com/papers/
// TODO: Implement arXiv Vanity translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-arxiv-vanity.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'arXiv Vanity',
      translatorType: 4,
      target: '^https?://www\.arxiv-vanity\.com/papers/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-17 23:58:17',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
