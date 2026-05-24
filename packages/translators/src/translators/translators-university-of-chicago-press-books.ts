// Translator: University of Chicago Press Books
// Target: ^https?://(www\.)?press\.uchicago\.edu/(ucp/books/|press/search.html)
// TODO: Implement University of Chicago Press Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-university-of-chicago-press-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'University of Chicago Press Books',
      translatorType: 4,
      target: '^https?://(www\.)?press\.uchicago\.edu/(ucp/books/|press/search.html)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-07 08:14:56',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
