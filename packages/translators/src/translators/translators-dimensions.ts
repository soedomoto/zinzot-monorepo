// Translator: Dimensions
// Target: ^https?://app\.dimensions\.ai/
// TODO: Implement Dimensions translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dimensions.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Dimensions',
      translatorType: 4,
      target: '^https?://app\.dimensions\.ai/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-12 22:22:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
