// Translator: PC Gamer
// Target: ^https?://(www\.)?pcgamer\.com/
// TODO: Implement PC Gamer translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pc-gamer.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PC Gamer',
      translatorType: 4,
      target: '^https?://(www\.)?pcgamer\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-15 21:10:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
