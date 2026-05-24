// Translator: La Presse
// Target: ^https?://(www|recherche)\.lapresse\.ca/
// TODO: Implement La Presse translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-la-presse.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'La Presse',
      translatorType: 4,
      target: '^https?://(www|recherche)\.lapresse\.ca/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-27 05:05:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
