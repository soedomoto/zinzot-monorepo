// Translator: RePEc - IDEAS
// Target: ^https?://ideas\.repec\.org/
// TODO: Implement RePEc - IDEAS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-repec-ideas.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'RePEc - IDEAS',
      translatorType: 4,
      target: '^https?://ideas\.repec\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-05 07:38:26',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
