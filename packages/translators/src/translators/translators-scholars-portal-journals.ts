// Translator: Scholars Portal Journals
// Target: ^https?://journals\.scholarsportal\.info/
// TODO: Implement Scholars Portal Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-scholars-portal-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Scholars Portal Journals',
      translatorType: 4,
      target: '^https?://journals\.scholarsportal\.info/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-02-05 18:25:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
