// Translator: L'Année Philologique
// Target: ^https?://cpps\.brepolis\.net/aph/
// TODO: Implement L'Année Philologique translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-l-ann-e-philologique.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'L\'Année Philologique',
      translatorType: 4,
      target: '^https?://cpps\.brepolis\.net/aph/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-13 02:22:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
