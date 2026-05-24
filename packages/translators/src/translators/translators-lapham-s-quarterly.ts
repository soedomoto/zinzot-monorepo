// Translator: Lapham's Quarterly
// Target: ^https?://www\.laphamsquarterly\.org/
// TODO: Implement Lapham's Quarterly translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-lapham-s-quarterly.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Lapham\'s Quarterly',
      translatorType: 4,
      target: '^https?://www\.laphamsquarterly\.org/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-04-11 10:35:51',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
