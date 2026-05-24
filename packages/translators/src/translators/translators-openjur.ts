// Translator: openJur
// Target: ^https?://openjur\.de/
// TODO: Implement openJur translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-openjur.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'openJur',
      translatorType: 4,
      target: '^https?://openjur\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-18 20:30:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
