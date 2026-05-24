// Translator: Tatknigafund
// Target: ^https?://www\.tatknigafund\.ru/books/
// TODO: Implement Tatknigafund translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-tatknigafund.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Tatknigafund',
      translatorType: 4,
      target: '^https?://www\.tatknigafund\.ru/books/',
      minVersion: '1.0.0b4.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2012-08-06 19:23:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
