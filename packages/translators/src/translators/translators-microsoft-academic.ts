// Translator: Microsoft Academic
// Target: ^https?://academic\.microsoft\.com
// TODO: Implement Microsoft Academic translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-microsoft-academic.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Microsoft Academic',
      translatorType: 4,
      target: '^https?://academic\.microsoft\.com',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-03-04 19:36:45',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
