// Translator: ERIC
// Target: ^https?://(www\.)?eric\.ed\.gov/
// TODO: Implement ERIC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-eric.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ERIC',
      translatorType: 12,
      target: '^https?://(www\.)?eric\.ed\.gov/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-05 11:56:39',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
