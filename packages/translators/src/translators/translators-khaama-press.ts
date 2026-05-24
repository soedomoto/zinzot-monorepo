// Translator: Khaama Press
// Target: ^https?://www\.khaama\.com/
// TODO: Implement Khaama Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-khaama-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Khaama Press',
      translatorType: 4,
      target: '^https?://www\.khaama\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-16 03:29:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
