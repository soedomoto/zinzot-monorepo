// Translator: Art Institute of Chicago
// Target: ^https?://(www\.)?artic\.edu/(artworks/|collection)
// TODO: Implement Art Institute of Chicago translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-art-institute-of-chicago.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Art Institute of Chicago',
      translatorType: 4,
      target: '^https?://(www\.)?artic\.edu/(artworks/|collection)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-04 20:08:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
