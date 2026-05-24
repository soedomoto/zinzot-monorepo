// Translator: Wikipedia
// Target: ^https?://[^/]*wikipedia\.org/
// TODO: Implement Wikipedia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wikipedia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wikipedia',
      translatorType: 4,
      target: '^https?://[^/]*wikipedia\.org/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-01-01 04:28:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
