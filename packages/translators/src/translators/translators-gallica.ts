// Translator: Gallica
// Target: ^https?://gallica\.bnf\.fr
// TODO: Implement Gallica translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-gallica.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Gallica',
      translatorType: 4,
      target: '^https?://gallica\.bnf\.fr',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-21 09:49:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
