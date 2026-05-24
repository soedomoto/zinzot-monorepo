// Translator: SAE Papers
// Target: ^https?://(www|papers)\.sae\.org/
// TODO: Implement SAE Papers translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sae-papers.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SAE Papers',
      translatorType: 4,
      target: '^https?://(www|papers)\.sae\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-07 05:40:25',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
