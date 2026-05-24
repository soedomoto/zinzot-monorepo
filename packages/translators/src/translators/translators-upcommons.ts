// Translator: UPCommons
// Target: ^https?://upcommons\.upc\.edu
// TODO: Implement UPCommons translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-upcommons.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'UPCommons',
      translatorType: 4,
      target: '^https?://upcommons\.upc\.edu',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-11 13:35:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
