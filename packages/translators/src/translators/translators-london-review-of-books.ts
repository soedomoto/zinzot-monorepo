// Translator: London Review of Books
// Target: ^https?://(www\.)?lrb\.co\.uk
// TODO: Implement London Review of Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-london-review-of-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'London Review of Books',
      translatorType: 4,
      target: '^https?://(www\.)?lrb\.co\.uk',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2021-09-21 16:56:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
