// Translator: Air University Journals
// Target: https?://www\.airuniversity\.af\.edu/(ASPJ|SSQ)
// TODO: Implement Air University Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-air-university-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Air University Journals',
      translatorType: 4,
      target: 'https?://www\.airuniversity\.af\.edu/(ASPJ|SSQ)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-14 19:04:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
