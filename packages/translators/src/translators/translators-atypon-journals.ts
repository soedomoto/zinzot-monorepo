// Translator: Atypon Journals
// Target: ^https?://[^?#]+(/doi/((abs|abstract|full|figure|ref|citedby|book)/)?10\.|/action/doSearch\?)|^https?://[^/]+/toc/
// TODO: Implement Atypon Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-atypon-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Atypon Journals',
      translatorType: 4,
      target: '^https?://[^?#]+(/doi/((abs|abstract|full|figure|ref|citedby|book)/)?10\.|/action/doSearch\?)|^https?://[^/]+/toc/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 270,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-10-25 02:51:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
