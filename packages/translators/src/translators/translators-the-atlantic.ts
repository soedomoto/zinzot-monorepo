// Translator: The Atlantic
// Target: ^https://www\.theatlantic\.com/.+
// TODO: Implement The Atlantic translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-atlantic.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Atlantic',
      translatorType: 4,
      target: '^https://www\.theatlantic\.com/.+',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-09-16 01:54:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
