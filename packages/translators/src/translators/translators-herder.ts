// Translator: Herder
// Target: ^https?://www\.herder\.de/
// TODO: Implement Herder translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-herder.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Herder',
      translatorType: 4,
      target: '^https?://www\.herder\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-06 21:21:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
