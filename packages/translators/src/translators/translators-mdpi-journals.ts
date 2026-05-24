// Translator: MDPI Journals
// Target: ^https?://www\.mdpi\.com
// TODO: Implement MDPI Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-mdpi-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'MDPI Journals',
      translatorType: 4,
      target: '^https?://www\.mdpi\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-01-24 13:33:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
