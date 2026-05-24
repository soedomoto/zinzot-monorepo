// Translator: govinfo
// Target: https?://www\.govinfo\.gov/
// TODO: Implement govinfo translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-govinfo.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'govinfo',
      translatorType: 4,
      target: 'https?://www\.govinfo\.gov/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-10-28 14:47:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
