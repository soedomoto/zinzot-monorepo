// Translator: Institute of Contemporary Art
// Target: ^https?://www\.icaboston\.org/
// TODO: Implement Institute of Contemporary Art translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-institute-of-contemporary-art.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Institute of Contemporary Art',
      translatorType: 4,
      target: '^https?://www\.icaboston\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-16 15:43:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
