// Translator: The Guardian
// Target: ^https?://(www\.)?(guardian\.co\.uk|theguardian\.com)/
// TODO: Implement The Guardian translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-guardian.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Guardian',
      translatorType: 4,
      target: '^https?://(www\.)?(guardian\.co\.uk|theguardian\.com)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-13 21:32:27',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
