// Translator: Alsharekh
// Target: ^https://archive\.alsharekh\.org/
// TODO: Implement Alsharekh translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-alsharekh.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Alsharekh',
      translatorType: 4,
      target: '^https://archive\.alsharekh\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-07-24 02:21:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
