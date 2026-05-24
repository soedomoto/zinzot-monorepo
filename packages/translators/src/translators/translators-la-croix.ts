// Translator: La Croix
// Target: ^https?://www\.la-croix\.com
// TODO: Implement La Croix translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-la-croix.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'La Croix',
      translatorType: 4,
      target: '^https?://www\.la-croix\.com',
      minVersion: '3.0.4',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-03 20:18:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
