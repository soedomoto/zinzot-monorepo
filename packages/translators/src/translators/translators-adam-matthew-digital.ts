// Translator: Adam Matthew Digital
// Target: ^https?://www\.([^.]+)\.amdigital\.co\.uk/
// TODO: Implement Adam Matthew Digital translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-adam-matthew-digital.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Adam Matthew Digital',
      translatorType: 4,
      target: '^https?://www\.([^.]+)\.amdigital\.co\.uk/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-21 05:00:48',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
