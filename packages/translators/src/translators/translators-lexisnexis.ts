// Translator: LexisNexis
// Target: ^https?://[^/]*lexis-?nexis\.com
// TODO: Implement LexisNexis translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-lexisnexis.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'LexisNexis',
      translatorType: 4,
      target: '^https?://[^/]*lexis-?nexis\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2014-03-20 20:48:18',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
