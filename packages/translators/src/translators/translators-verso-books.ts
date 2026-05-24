// Translator: Verso Books
// Target: ^https?://(www\.)?versobooks\.com/books/
// TODO: Implement Verso Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-verso-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Verso Books',
      translatorType: 4,
      target: '^https?://(www\.)?versobooks\.com/books/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-30 18:30:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
