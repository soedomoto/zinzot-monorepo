// Translator: ePrint IACR
// Target: ^https://eprint\.iacr\.org/
// TODO: Implement ePrint IACR translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-eprint-iacr.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ePrint IACR',
      translatorType: 4,
      target: '^https://eprint\.iacr\.org/',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-21 13:48:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
