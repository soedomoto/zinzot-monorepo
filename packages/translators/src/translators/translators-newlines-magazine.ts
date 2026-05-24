// Translator: Newlines Magazine
// Target: ^https?://newlinesmag\.com/
// TODO: Implement Newlines Magazine translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-newlines-magazine.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Newlines Magazine',
      translatorType: 4,
      target: '^https?://newlinesmag\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-17 03:23:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
