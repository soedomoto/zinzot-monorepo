// Translator: Korean National Library
// Target: ^https?://www\.nl\.go\.kr/(EN|NL)/contents/(eng)?[sS]earch\.do
// TODO: Implement Korean National Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-korean-national-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Korean National Library',
      translatorType: 4,
      target: '^https?://www\.nl\.go\.kr/(EN|NL)/contents/(eng)?[sS]earch\.do',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-28 02:37:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
