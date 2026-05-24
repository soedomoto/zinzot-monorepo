// Translator: dejure.org
// Target: ^https?://dejure\.org/
// TODO: Implement dejure.org translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dejure-org.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'dejure.org',
      translatorType: 4,
      target: '^https?://dejure\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-16 20:00:51',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
