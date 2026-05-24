// Translator: Treesearch
// Target: ^https?://([^/]+\.)?treesearch\.fs\.fed\.us/(pubs/\d+$|search\.php)
// TODO: Implement Treesearch translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-treesearch.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Treesearch',
      translatorType: 4,
      target: '^https?://([^/]+\.)?treesearch\.fs\.fed\.us/(pubs/\d+$|search\.php)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 23:05:56',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
