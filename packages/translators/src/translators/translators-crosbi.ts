// Translator: CROSBI
// Target: ^https?://www\.bib\.irb\.hr/
// TODO: Implement CROSBI translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-crosbi.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CROSBI',
      translatorType: 4,
      target: '^https?://www\.bib\.irb\.hr/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-09 22:29:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
