// Translator: Le monde diplomatique
// Target: ^https?://(www\.)?monde-diplomatique\.de
// TODO: Implement Le monde diplomatique translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-le-monde-diplomatique.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Le monde diplomatique',
      translatorType: 4,
      target: '^https?://(www\.)?monde-diplomatique\.de',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-04 22:01:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
