// Translator: Toronto Star
// Target: ^https?://www\.thestar\.com/
// TODO: Implement Toronto Star translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-toronto-star.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Toronto Star',
      translatorType: 4,
      target: '^https?://www\.thestar\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-13 15:59:47',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
