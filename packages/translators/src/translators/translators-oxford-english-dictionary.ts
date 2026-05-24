// Translator: Oxford English Dictionary
// Target: ^https?://(www\.)?oed\.com/
// TODO: Implement Oxford English Dictionary translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-oxford-english-dictionary.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Oxford English Dictionary',
      translatorType: 4,
      target: '^https?://(www\.)?oed\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-14 21:23:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
