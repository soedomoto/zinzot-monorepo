// Translator: Heise
// Target: ^https?://www\.heise\.de/(suche|select)/
// TODO: Implement Heise translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-heise.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Heise',
      translatorType: 4,
      target: '^https?://www\.heise\.de/(suche|select)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2021-05-27 00:40:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
