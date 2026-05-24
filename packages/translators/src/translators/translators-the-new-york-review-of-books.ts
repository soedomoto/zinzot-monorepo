// Translator: The New York Review of Books
// Target: ^https?://www\.nybooks\.com/
// TODO: Implement The New York Review of Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-new-york-review-of-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The New York Review of Books',
      translatorType: 4,
      target: '^https?://www\.nybooks\.com/',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-03 11:23:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
