// Translator: TVNZ
// Target: ^https?://(www\.)?tvnz\.co\.nz/one-news/
// TODO: Implement TVNZ translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-tvnz.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'TVNZ',
      translatorType: 4,
      target: '^https?://(www\.)?tvnz\.co\.nz/one-news/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-04-07 18:10:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
