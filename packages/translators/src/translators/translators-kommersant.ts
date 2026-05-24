// Translator: Kommersant
// Target: ^https?://(www\.)?kommersant\.ru/
// TODO: Implement Kommersant translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-kommersant.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Kommersant',
      translatorType: 4,
      target: '^https?://(www\.)?kommersant\.ru/',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 16:02:40',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
