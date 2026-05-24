// Translator: Wall Street Journal
// Target: ^https?://(online|blogs|www)?\.wsj\.com/
// TODO: Implement Wall Street Journal translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wall-street-journal.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wall Street Journal',
      translatorType: 4,
      target: '^https?://(online|blogs|www)?\.wsj\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-01-14 04:48:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
