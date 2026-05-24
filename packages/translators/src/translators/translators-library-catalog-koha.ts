// Translator: Library Catalog (Koha)
// Target: ^https?://[^/]+/cgi-bin/koha/opac-(detail|search|shelves)\.pl\?
// TODO: Implement Library Catalog (Koha) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-koha.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Koha)',
      translatorType: 4,
      target: '^https?://[^/]+/cgi-bin/koha/opac-(detail|search|shelves)\.pl\?',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 260,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2015-10-17 18:23:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
