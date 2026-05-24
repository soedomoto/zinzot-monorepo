// Translator: The Hamilton Spectator
// Target: ^https?://www\.thespec\.com
// TODO: Implement The Hamilton Spectator translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-hamilton-spectator.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Hamilton Spectator',
      translatorType: 4,
      target: '^https?://www\.thespec\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-10 15:23:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
