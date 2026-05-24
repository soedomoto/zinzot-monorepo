// Translator: CSIRO Publishing
// Target: ^https?://(www\.)?publish\.csiro\.au/
// TODO: Implement CSIRO Publishing translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-csiro-publishing.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CSIRO Publishing',
      translatorType: 4,
      target: '^https?://(www\.)?publish\.csiro\.au/',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 16:46:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
