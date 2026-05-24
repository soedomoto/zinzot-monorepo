// Translator: Probing the Past
// Target: ^https?://chnm\.gmu\.edu/probateinventory/
// TODO: Implement Probing the Past translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-probing-the-past.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Probing the Past',
      translatorType: 4,
      target: '^https?://chnm\.gmu\.edu/probateinventory/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-28 20:46:55',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
