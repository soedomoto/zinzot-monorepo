// Translator: Wikiwand
// Target: ^https?://www\.wikiwand\.com/[^/?]+/[^/?]+
// TODO: Implement Wikiwand translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wikiwand.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wikiwand',
      translatorType: 4,
      target: '^https?://www\.wikiwand\.com/[^/?]+/[^/?]+',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-13 22:38:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
