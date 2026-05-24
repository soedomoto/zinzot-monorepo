// Translator: National Technical Reports Library
// Target: ^https?://ntrl\.ntis\.gov/NTRL/
// TODO: Implement National Technical Reports Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-technical-reports-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Technical Reports Library',
      translatorType: 4,
      target: '^https?://ntrl\.ntis\.gov/NTRL/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-31 19:24:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
