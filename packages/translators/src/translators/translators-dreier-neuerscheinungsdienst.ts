// Translator: Dreier Neuerscheinungsdienst
// Target: ^https?://www\.dietmardreier\.de/
// TODO: Implement Dreier Neuerscheinungsdienst translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dreier-neuerscheinungsdienst.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Dreier Neuerscheinungsdienst',
      translatorType: 4,
      target: '^https?://www\.dietmardreier\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-25 08:40:51',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
