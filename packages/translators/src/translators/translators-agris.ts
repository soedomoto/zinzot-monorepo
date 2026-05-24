// Translator: AGRIS
// Target: ^https?://agris\.fao\.org/agris-search/search
// TODO: Implement AGRIS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-agris.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AGRIS',
      translatorType: 4,
      target: '^https?://agris\.fao\.org/agris-search/search',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-12 21:34:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
