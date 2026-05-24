// Translator: Code4Lib Journal
// Target: ^https?://journal\.code4lib\.org/
// TODO: Implement Code4Lib Journal translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-code4lib-journal.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Code4Lib Journal',
      translatorType: 4,
      target: '^https?://journal\.code4lib\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-08-23 11:15:21',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
