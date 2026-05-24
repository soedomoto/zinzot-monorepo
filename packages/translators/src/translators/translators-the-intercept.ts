// Translator: The Intercept
// Target: ^https?://(www\.)?theintercept\.com
// TODO: Implement The Intercept translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-intercept.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Intercept',
      translatorType: 4,
      target: '^https?://(www\.)?theintercept\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-11 16:49:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
