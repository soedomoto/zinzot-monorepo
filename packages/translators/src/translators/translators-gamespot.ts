// Translator: GameSpot
// Target: ^https?://(www\.)?gamespot\.com
// TODO: Implement GameSpot translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-gamespot.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'GameSpot',
      translatorType: 4,
      target: '^https?://(www\.)?gamespot\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-03-11 09:11:19',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
