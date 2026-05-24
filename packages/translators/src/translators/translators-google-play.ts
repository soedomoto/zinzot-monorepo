// Translator: Google Play
// Target: ^https?://play\.google\.com/
// TODO: Implement Google Play translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-google-play.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Google Play',
      translatorType: 4,
      target: '^https?://play\.google\.com/',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-07 18:01:47',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
