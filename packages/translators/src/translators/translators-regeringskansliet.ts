// Translator: Regeringskansliet
// Target: ^https?://(www\.)?regeringen\.se/
// TODO: Implement Regeringskansliet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-regeringskansliet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Regeringskansliet',
      translatorType: 4,
      target: '^https?://(www\.)?regeringen\.se/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2013-04-15 18:04:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
