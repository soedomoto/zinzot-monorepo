// Translator: Central and Eastern European Online Library Journals
// Target: ^https?://www\.ceeol\.com/search
// TODO: Implement Central and Eastern European Online Library Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-central-and-eastern-european-online-library-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Central and Eastern European Online Library Journals',
      translatorType: 4,
      target: '^https?://www\.ceeol\.com/search',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-22 20:12:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
