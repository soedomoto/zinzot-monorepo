// Translator: Harper's Magazine
// Target: ^https?://(www\.)?harpers\.org/
// TODO: Implement Harper's Magazine translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-harper-s-magazine.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Harper\'s Magazine',
      translatorType: 4,
      target: '^https?://(www\.)?harpers\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-22 00:16:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
