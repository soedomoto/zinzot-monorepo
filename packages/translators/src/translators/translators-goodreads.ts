// Translator: Goodreads
// Target: ^https?://www\.goodreads\.com/(book/show/|search\?)
// TODO: Implement Goodreads translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-goodreads.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Goodreads',
      translatorType: 4,
      target: '^https?://www\.goodreads\.com/(book/show/|search\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-12-11 18:55:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
