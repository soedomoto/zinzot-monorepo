// Translator: FreeCite
// Target: ^https?://freecite\.library\.brown\.edu/citations/create
// TODO: Implement FreeCite translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-freecite.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'FreeCite',
      translatorType: 4,
      target: '^https?://freecite\.library\.brown\.edu/citations/create',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2015-03-16 23:13:55',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
