// Translator: OCLC WorldCat FirstSearch
// Target: ^https?://[^/]*firstsearch\.oclc\.org[^/]*/WebZ/
// TODO: Implement OCLC WorldCat FirstSearch translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-oclc-worldcat-firstsearch.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OCLC WorldCat FirstSearch',
      translatorType: 4,
      target: '^https?://[^/]*firstsearch\.oclc\.org[^/]*/WebZ/',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'g',
      lastUpdated: '2017-01-01 15:28:35',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
