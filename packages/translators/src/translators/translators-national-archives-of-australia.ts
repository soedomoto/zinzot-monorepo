// Translator: National Archives of Australia
// Target: ^https?://recordsearch\.naa\.gov\.au/
// TODO: Implement National Archives of Australia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-archives-of-australia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Archives of Australia',
      translatorType: 4,
      target: '^https?://recordsearch\.naa\.gov\.au/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-02-13 11:39:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
