// Translator: Retsinformation
// Target: ^https?://(www\.)?retsinformation\.dk/
// TODO: Implement Retsinformation translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-retsinformation.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Retsinformation',
      translatorType: 4,
      target: '^https?://(www\.)?retsinformation\.dk/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-01-15 18:52:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
