// Translator: Juris
// Target: ^https?://(www\.|testsystem\.)?juris\.de/
// TODO: Implement Juris translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-juris.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Juris',
      translatorType: 4,
      target: '^https?://(www\.|testsystem\.)?juris\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-08-27 10:42:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
