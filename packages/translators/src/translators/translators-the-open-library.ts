// Translator: The Open Library
// Target: ^https?://openlibrary\.org
// TODO: Implement The Open Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-open-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Open Library',
      translatorType: 4,
      target: '^https?://openlibrary\.org',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2017-05-25 13:52:51',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
