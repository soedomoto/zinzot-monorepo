// Translator: Library Catalog (RERO ILS)
// Target: ^https://((ils\.test|bib)\.rero\.ch|ils\.bib\.uclouvain\.be)/[^/]+/(documents/\d+|search/documents\?)
// TODO: Implement Library Catalog (RERO ILS) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-rero-ils.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (RERO ILS)',
      translatorType: 4,
      target: '^https://((ils\.test|bib)\.rero\.ch|ils\.bib\.uclouvain\.be)/[^/]+/(documents/\d+|search/documents\?)',
      minVersion: '5.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-24 20:02:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
