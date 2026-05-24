// Translator: EPA National Library Catalog
// Target: ^https?://cfpub\.epa\.gov/ols
// TODO: Implement EPA National Library Catalog translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-epa-national-library-catalog.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'EPA National Library Catalog',
      translatorType: 4,
      target: '^https?://cfpub\.epa\.gov/ols',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcv',
      lastUpdated: '2016-09-14 10:36:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
