// Translator: OpenAlex
// Target: ^https://openalex\.org/works
// TODO: Implement OpenAlex translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-openalex.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OpenAlex',
      translatorType: 12,
      target: '^https://openalex\.org/works',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-29 14:16:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
