// Translator: Antikvarium.hu
// Target: ^https?://(www\.)?antikvarium\.hu/
// TODO: Implement Antikvarium.hu translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-antikvarium-hu.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Antikvarium.hu',
      translatorType: 4,
      target: '^https?://(www\.)?antikvarium\.hu/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-22 19:39:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
