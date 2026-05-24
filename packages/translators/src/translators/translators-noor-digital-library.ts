// Translator: Noor Digital Library
// Target: ^https?://noorlib\.ir/
// TODO: Implement Noor Digital Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-noor-digital-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Noor Digital Library',
      translatorType: 4,
      target: '^https?://noorlib\.ir/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-03 19:35:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
