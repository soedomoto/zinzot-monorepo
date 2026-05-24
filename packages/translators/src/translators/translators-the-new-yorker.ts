// Translator: The New Yorker
// Target: ^https?://www\.newyorker\.com/
// TODO: Implement The New Yorker translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-new-yorker.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The New Yorker',
      translatorType: 4,
      target: '^https?://www\.newyorker\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-01-20 11:53:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
