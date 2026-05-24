// Translator: Hispanic-American Periodical Index
// Target: ^https?://hapi\.ucla\.edu
// TODO: Implement Hispanic-American Periodical Index translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-hispanic-american-periodical-index.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Hispanic-American Periodical Index',
      translatorType: 4,
      target: '^https?://hapi\.ucla\.edu',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-03 18:32:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
