// Translator: Open Knowledge Repository
// Target: ^https?://openknowledge\.worldbank\.org/
// TODO: Implement Open Knowledge Repository translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-open-knowledge-repository.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Open Knowledge Repository',
      translatorType: 4,
      target: '^https?://openknowledge\.worldbank\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-20 19:05:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
