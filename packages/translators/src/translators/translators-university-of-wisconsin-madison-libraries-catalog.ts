// Translator: University of Wisconsin-Madison Libraries Catalog
// Target: ^https://search\.library\.wisc\.edu/(catalog|search)/
// TODO: Implement University of Wisconsin-Madison Libraries Catalog translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-university-of-wisconsin-madison-libraries-catalog.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'University of Wisconsin-Madison Libraries Catalog',
      translatorType: 4,
      target: '^https://search\.library\.wisc\.edu/(catalog|search)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-05-31 01:20:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
