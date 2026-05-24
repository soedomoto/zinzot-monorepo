// Translator: Computer History Museum Archive
// Target: ^https?://www\.computerhistory\.org/collections/
// TODO: Implement Computer History Museum Archive translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-computer-history-museum-archive.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Computer History Museum Archive',
      translatorType: 4,
      target: '^https?://www\.computerhistory\.org/collections/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 16:40:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
