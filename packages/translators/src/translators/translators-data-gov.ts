// Translator: Data.gov
// Target: ^https?://catalog\.data\.gov/dataset
// TODO: Implement Data.gov translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-data-gov.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Data.gov',
      translatorType: 4,
      target: '^https?://catalog\.data\.gov/dataset',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-21 21:34:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
