// Translator: Integrum
// Target: ^https?://aafnet\.integrum\.ru/
// TODO: Implement Integrum translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-integrum.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Integrum',
      translatorType: 4,
      target: '^https?://aafnet\.integrum\.ru/',
      minVersion: '3',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-12-05 03:14:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
