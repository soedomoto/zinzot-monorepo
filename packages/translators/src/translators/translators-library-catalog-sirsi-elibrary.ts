// Translator: Library Catalog (SIRSI eLibrary)
// Target: /uhtbin/(cgisirsi|quick_keyword)
// TODO: Implement Library Catalog (SIRSI eLibrary) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-sirsi-elibrary.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (SIRSI eLibrary)',
      translatorType: 4,
      target: '/uhtbin/(cgisirsi|quick_keyword)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-27 20:32:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
