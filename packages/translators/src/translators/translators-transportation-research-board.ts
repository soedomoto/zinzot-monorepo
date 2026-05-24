// Translator: Transportation Research Board
// Target: ^https?://(www|trid)\.trb\.org/
// TODO: Implement Transportation Research Board translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-transportation-research-board.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Transportation Research Board',
      translatorType: 4,
      target: '^https?://(www|trid)\.trb\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-12 20:11:41',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
