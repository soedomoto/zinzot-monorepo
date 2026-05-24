// Translator: MIT Press Books
// Target: https://(www\.)?mitpress\.mit\.edu/(mit-press-open|contributors|search|series|distribution|topics|forthcoming|best-sellers|books)
// TODO: Implement MIT Press Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-mit-press-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'MIT Press Books',
      translatorType: 4,
      target: 'https://(www\.)?mitpress\.mit\.edu/(mit-press-open|contributors|search|series|distribution|topics|forthcoming|best-sellers|books)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-28 22:21:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
