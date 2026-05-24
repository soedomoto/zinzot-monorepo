// Translator: Bookshop.org
// Target: ^https://bookshop\.org/books
// TODO: Implement Bookshop.org translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bookshop-org.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bookshop.org',
      translatorType: 4,
      target: '^https://bookshop\.org/books',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-01 17:14:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
