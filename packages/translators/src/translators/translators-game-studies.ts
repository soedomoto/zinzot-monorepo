// Translator: Game Studies
// Target: ^https?://gamestudies\.org/\d
// TODO: Implement Game Studies translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-game-studies.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Game Studies',
      translatorType: 4,
      target: '^https?://gamestudies\.org/\d',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-01 18:36:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
