// Translator: CanLII
// Target: ^https?://(www\.)?canlii\.org/(en|fr)/
// TODO: Implement CanLII translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-canlii.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CanLII',
      translatorType: 4,
      target: '^https?://(www\.)?canlii\.org/(en|fr)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-03-15 05:20:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
