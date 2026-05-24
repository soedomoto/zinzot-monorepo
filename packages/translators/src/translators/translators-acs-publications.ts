// Translator: ACS Publications
// Target: ^https?://pubs\.acs\.org/(toc/|journal/|topic/|isbn/\d|doi/(full/|abs/|epdf/|book/)?10\.|action/(doSearch\?|showCitFormats\?.*doi))
// TODO: Implement ACS Publications translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-acs-publications.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ACS Publications',
      translatorType: 4,
      target: '^https?://pubs\.acs\.org/(toc/|journal/|topic/|isbn/\d|doi/(full/|abs/|epdf/|book/)?10\.|action/(doSearch\?|showCitFormats\?.*doi))',
      minVersion: '4.0.5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-09-30 13:55:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
