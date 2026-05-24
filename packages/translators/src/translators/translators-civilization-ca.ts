// Translator: Civilization.ca
// Target: ^https?://collections\.civilization\.ca
// TODO: Implement Civilization.ca translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-civilization-ca.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Civilization.ca',
      translatorType: 4,
      target: '^https?://collections\.civilization\.ca',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:38:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
