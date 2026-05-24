// Translator: ProMED
// Target: ^https?://www\.promedmail\.org
// TODO: Implement ProMED translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-promed.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ProMED',
      translatorType: 4,
      target: '^https?://www\.promedmail\.org',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2013-11-19 00:12:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
