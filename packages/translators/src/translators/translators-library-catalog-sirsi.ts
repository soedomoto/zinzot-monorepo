// Translator: Library Catalog (SIRSI)
// Target: /uhtbin/(cgisirsi|quick_keyword)
// TODO: Implement Library Catalog (SIRSI) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-sirsi.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (SIRSI)',
      translatorType: 4,
      target: '/uhtbin/(cgisirsi|quick_keyword)',
      minVersion: '2.1',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-27 20:16:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
