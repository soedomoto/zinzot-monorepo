// Translator: CIA World Factbook
// Target: ^https?://www\.cia\.gov/the-world-factbook/countries/
// TODO: Implement CIA World Factbook translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cia-world-factbook.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CIA World Factbook',
      translatorType: 4,
      target: '^https?://www\.cia\.gov/the-world-factbook/countries/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-20 03:58:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
