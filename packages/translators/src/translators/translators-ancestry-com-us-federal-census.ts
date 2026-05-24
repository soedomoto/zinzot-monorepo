// Translator: Ancestry.com US Federal Census
// Target: ^https?://(www\.)?ancestry\.com/
// TODO: Implement Ancestry.com US Federal Census translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ancestry-com-us-federal-census.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Ancestry.com US Federal Census',
      translatorType: 4,
      target: '^https?://(www\.)?ancestry\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcibv',
      lastUpdated: '2021-07-22 19:20:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
