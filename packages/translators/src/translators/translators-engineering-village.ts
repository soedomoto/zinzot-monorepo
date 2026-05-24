// Translator: Engineering Village
// Target: ^https?://(www\.)?engineeringvillage(2)?\.(com|org)/
// TODO: Implement Engineering Village translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-engineering-village.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Engineering Village',
      translatorType: 4,
      target: '^https?://(www\.)?engineeringvillage(2)?\.(com|org)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-10-04 02:24:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
