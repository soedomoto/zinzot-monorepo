// Translator: Brill
// Target: ^https?://(www\.|referenceworks\.|bibliographies\.)?brill(online)?\.com/
// TODO: Implement Brill translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-brill.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Brill',
      translatorType: 4,
      target: '^https?://(www\.|referenceworks\.|bibliographies\.)?brill(online)?\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-06-14 15:36:55',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
