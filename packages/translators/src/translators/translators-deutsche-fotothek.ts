// Translator: Deutsche Fotothek
// Target: https?://www\.deutschefotothek\.de/
// TODO: Implement Deutsche Fotothek translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-deutsche-fotothek.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Deutsche Fotothek',
      translatorType: 4,
      target: 'https?://www\.deutschefotothek\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-29 02:40:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
