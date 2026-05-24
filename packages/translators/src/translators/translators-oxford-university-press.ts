// Translator: Oxford University Press
// Target: ^https?://global\.oup\.com/academic/
// TODO: Implement Oxford University Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-oxford-university-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Oxford University Press',
      translatorType: 4,
      target: '^https?://global\.oup\.com/academic/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-10-05 01:20:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
