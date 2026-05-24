// Translator: The Nation
// Target: ^https?://www\.thenation\.com/
// TODO: Implement The Nation translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-nation.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Nation',
      translatorType: 4,
      target: '^https?://www\.thenation\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-01 20:37:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
