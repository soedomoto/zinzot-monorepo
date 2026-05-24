// Translator: The Times of Israel
// Target: https?://(www\.)?timesofisrael\.com/
// TODO: Implement The Times of Israel translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-times-of-israel.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Times of Israel',
      translatorType: 4,
      target: 'https?://(www\.)?timesofisrael\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-05-08 16:35:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
