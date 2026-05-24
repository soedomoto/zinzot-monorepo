// Translator: Library Catalog (BiblioCommons)
// Target: ^https?://[^/]+\.bibliocommons\.com/
// TODO: Implement Library Catalog (BiblioCommons) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-bibliocommons.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (BiblioCommons)',
      translatorType: 4,
      target: '^https?://[^/]+\.bibliocommons\.com/',
      minVersion: '2.1',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-05-19 21:14:05',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
