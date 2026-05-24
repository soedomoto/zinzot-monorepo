// Translator: Standard Ebooks
// Target: ^https?://standardebooks\.org/
// TODO: Implement Standard Ebooks translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-standard-ebooks.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Standard Ebooks',
      translatorType: 4,
      target: '^https?://standardebooks\.org/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-02-24 09:12:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
