// Translator: SAGE Journals
// Target: ^https?://journals\.sagepub\.com(/doi/((abs|full|pdf)/)?10\.|/action/doSearch\?|/toc/)
// TODO: Implement SAGE Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sage-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SAGE Journals',
      translatorType: 4,
      target: '^https?://journals\.sagepub\.com(/doi/((abs|full|pdf)/)?10\.|/action/doSearch\?|/toc/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-06-09 21:19:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
