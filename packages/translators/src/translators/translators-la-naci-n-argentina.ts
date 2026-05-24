// Translator: La Nación (Argentina)
// Target: ^https://www\.lanacion\.com\.ar/
// TODO: Implement La Nación (Argentina) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-la-naci-n-argentina.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'La Nación (Argentina)',
      translatorType: 4,
      target: '^https://www\.lanacion\.com\.ar/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-23 03:22:23',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
