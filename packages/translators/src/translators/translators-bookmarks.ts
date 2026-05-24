// Translator: Bookmarks
// Target: html
// TODO: Implement Bookmarks translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bookmarks.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bookmarks',
      translatorType: 3,
      target: 'html',
      minVersion: '2.1b6',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-07-14 20:21:20',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
