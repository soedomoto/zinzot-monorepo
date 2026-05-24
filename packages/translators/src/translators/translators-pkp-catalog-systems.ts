// Translator: PKP Catalog Systems
// Target: /(article|preprint|issue)/view/|/catalog/book/|/search/search|/index\.php/default
// TODO: Implement PKP Catalog Systems translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pkp-catalog-systems.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PKP Catalog Systems',
      translatorType: 4,
      target: '/(article|preprint|issue)/view/|/catalog/book/|/search/search|/index\.php/default',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 200,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-21 19:10:24',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
