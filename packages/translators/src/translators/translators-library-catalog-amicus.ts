// Translator: Library Catalog (Amicus)
// Target: ^https?://amicus\.collectionscanada\.ca/aaweb-bin/aamain
// TODO: Implement Library Catalog (Amicus) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-amicus.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Amicus)',
      translatorType: 4,
      target: '^https?://amicus\.collectionscanada\.ca/aaweb-bin/aamain',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-08-26 03:47:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
