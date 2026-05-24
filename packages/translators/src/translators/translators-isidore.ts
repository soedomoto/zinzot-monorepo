// Translator: Isidore
// Target: ^https?://(www\.)?isidore\.science/
// TODO: Implement Isidore translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-isidore.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Isidore',
      translatorType: 4,
      target: '^https?://(www\.)?isidore\.science/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-29 03:29:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
