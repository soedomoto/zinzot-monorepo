// Translator: PC Games
// Target: ^https?://(www\.)?pcgames\.de
// TODO: Implement PC Games translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pc-games.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PC Games',
      translatorType: 4,
      target: '^https?://(www\.)?pcgames\.de',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-04-06 11:16:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
