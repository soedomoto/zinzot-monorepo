// Translator: Library Catalog (TinREAD)
// Target: ^https?://[^/]+/opac/bibliographic_view
// TODO: Implement Library Catalog (TinREAD) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-tinread.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (TinREAD)',
      translatorType: 4,
      target: '^https?://[^/]+/opac/bibliographic_view',
      minVersion: '5.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-08-01 14:20:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
