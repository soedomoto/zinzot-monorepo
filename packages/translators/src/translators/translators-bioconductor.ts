// Translator: Bioconductor
// Target: https?://(www\.)?bioconductor\.org/(packages/.*/bioc/html|help/search)/
// TODO: Implement Bioconductor translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bioconductor.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bioconductor',
      translatorType: 4,
      target: 'https?://(www\.)?bioconductor\.org/(packages/.*/bioc/html|help/search)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-09-17 16:47:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
