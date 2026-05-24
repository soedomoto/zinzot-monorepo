// Translator: NYPL Research Catalog
// Target: ^https://www\.nypl\.org/research/research-catalog/
// TODO: Implement NYPL Research Catalog translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nypl-research-catalog.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NYPL Research Catalog',
      translatorType: 4,
      target: '^https://www\.nypl\.org/research/research-catalog/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-01-26 23:24:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
