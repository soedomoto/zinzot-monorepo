// Translator: National Diet Library Catalogue
// Target: ^https?://iss\.ndl\.go\.jp/
// TODO: Implement National Diet Library Catalogue translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-diet-library-catalogue.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Diet Library Catalogue',
      translatorType: 4,
      target: '^https?://iss\.ndl\.go\.jp/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2015-08-15 16:07:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
