// Translator: Sueddeutsche.de
// Target: ^https?://www\.sueddeutsche\.de
// TODO: Implement Sueddeutsche.de translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sueddeutsche-de.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Sueddeutsche.de',
      translatorType: 4,
      target: '^https?://www\.sueddeutsche\.de',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-24 21:03:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
