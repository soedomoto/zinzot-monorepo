// Translator: Denik CZ
// Target: ^https?://[^/]*denik\.cz
// TODO: Implement Denik CZ translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-denik-cz.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Denik CZ',
      translatorType: 4,
      target: '^https?://[^/]*denik\.cz',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-07 09:27:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
