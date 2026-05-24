// Translator: University of California Press Books
// Target: ^https://www\.ucpress\.edu/(book/|search\.php\?)
// TODO: Implement University of California Press Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-university-of-california-press-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'University of California Press Books',
      translatorType: 4,
      target: '^https://www\.ucpress\.edu/(book/|search\.php\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-29 06:45:51',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
