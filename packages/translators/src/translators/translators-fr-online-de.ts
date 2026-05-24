// Translator: fr-online.de
// Target: ^https?://www\.fr-online\.de
// TODO: Implement fr-online.de translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-fr-online-de.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'fr-online.de',
      translatorType: 4,
      target: '^https?://www\.fr-online\.de',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-04-03 17:37:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
