// Translator: Microbiology Society Journals
// Target: ^https?://(www\.)?(\w)+\.microbiologyresearch\.org/(content/journal/|search?)
// TODO: Implement Microbiology Society Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-microbiology-society-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Microbiology Society Journals',
      translatorType: 4,
      target: '^https?://(www\.)?(\w)+\.microbiologyresearch\.org/(content/journal/|search?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-01-14 04:26:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
