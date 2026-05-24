// Translator: Wiktionary
// Target: ^https?://[^/]*\.wiktionary\.org/
// TODO: Implement Wiktionary translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wiktionary.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wiktionary',
      translatorType: 4,
      target: '^https?://[^/]*\.wiktionary\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-05 20:28:20',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
