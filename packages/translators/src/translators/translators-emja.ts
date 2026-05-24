// Translator: eMJA
// Target: ^https?://www\.mja\.com\.au/
// TODO: Implement eMJA translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-emja.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'eMJA',
      translatorType: 4,
      target: '^https?://www\.mja\.com\.au/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-18 17:31:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
