// Translator: OpenEdition Books
// Target: ^https?://books\.openedition\.org/
// TODO: Implement OpenEdition Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-openedition-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OpenEdition Books',
      translatorType: 4,
      target: '^https?://books\.openedition\.org/',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-03 11:17:56',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
