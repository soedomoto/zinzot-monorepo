// Translator: GMS German Medical Science
// Target: ^https?://www\.egms\.de/static/(de|en)/
// TODO: Implement GMS German Medical Science translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-gms-german-medical-science.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'GMS German Medical Science',
      translatorType: 4,
      target: '^https?://www\.egms\.de/static/(de|en)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-11-12 15:53:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
