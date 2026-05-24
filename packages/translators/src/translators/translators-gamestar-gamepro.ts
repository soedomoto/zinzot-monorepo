// Translator: GameStar/GamePro
// Target: ^https?://(www\.)?game(star|pro)\.de
// TODO: Implement GameStar/GamePro translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-gamestar-gamepro.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'GameStar/GamePro',
      translatorType: 4,
      target: '^https?://(www\.)?game(star|pro)\.de',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-01 22:28:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
