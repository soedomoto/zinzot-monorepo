// Translator: CBC
// Target: ^https?:\/\/www\.cbc\.ca/
// TODO: Implement CBC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cbc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CBC',
      translatorType: 4,
      target: '^https?:\/\/www\.cbc\.ca/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-14 20:55:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
