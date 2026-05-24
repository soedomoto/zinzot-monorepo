// Translator: Oxford Reference
// Target: ^https?://www\.oxfordreference\.com/
// TODO: Implement Oxford Reference translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-oxford-reference.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Oxford Reference',
      translatorType: 4,
      target: '^https?://www\.oxfordreference\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-22 13:47:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
