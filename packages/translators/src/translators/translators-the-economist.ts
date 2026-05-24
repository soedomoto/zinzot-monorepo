// Translator: The Economist
// Target: ^https?://(www\.)?economist\.com/
// TODO: Implement The Economist translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-economist.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Economist',
      translatorType: 4,
      target: '^https?://(www\.)?economist\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-10-31 11:08:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
