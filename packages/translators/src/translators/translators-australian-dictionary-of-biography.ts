// Translator: Australian Dictionary of Biography
// Target: ^https?://adb\.anu\.edu\.au/biograph(y|ies)/
// TODO: Implement Australian Dictionary of Biography translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-australian-dictionary-of-biography.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Australian Dictionary of Biography',
      translatorType: 4,
      target: '^https?://adb\.anu\.edu\.au/biograph(y|ies)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-14 04:18:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
