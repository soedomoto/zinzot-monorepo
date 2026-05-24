// Translator: Juricaf
// Target: ^https?://(www\.)?juricaf\.org/(arret|recherche)/
// TODO: Implement Juricaf translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-juricaf.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Juricaf',
      translatorType: 4,
      target: '^https?://(www\.)?juricaf\.org/(arret|recherche)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-12 16:37:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
