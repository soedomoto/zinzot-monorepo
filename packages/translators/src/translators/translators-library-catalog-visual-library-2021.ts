// Translator: Library Catalog (Visual Library 2021)
// Target: /search(/quick)?\?|/nav/index/|/(content|periodical)/
// TODO: Implement Library Catalog (Visual Library 2021) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-visual-library-2021.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Visual Library 2021)',
      translatorType: 4,
      target: '/search(/quick)?\?|/nav/index/|/(content|periodical)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-19 16:39:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
