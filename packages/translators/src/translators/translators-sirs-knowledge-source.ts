// Translator: SIRS Knowledge Source
// Target: ^https?://([^/]+\.)?sks\.sirs\.com/
// TODO: Implement SIRS Knowledge Source translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sirs-knowledge-source.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SIRS Knowledge Source',
      translatorType: 4,
      target: '^https?://([^/]+\.)?sks\.sirs\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsib',
      lastUpdated: '2015-02-02 23:47:53',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
