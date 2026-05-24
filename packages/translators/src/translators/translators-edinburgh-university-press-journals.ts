// Translator: Edinburgh University Press Journals
// Target: ^https?://www\.euppublishing\.com/
// TODO: Implement Edinburgh University Press Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-edinburgh-university-press-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Edinburgh University Press Journals',
      translatorType: 4,
      target: '^https?://www\.euppublishing\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-13 21:55:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
