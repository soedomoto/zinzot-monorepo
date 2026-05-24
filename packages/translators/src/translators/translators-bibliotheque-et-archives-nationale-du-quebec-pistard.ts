// Translator: Bibliotheque et Archives Nationale du Quebec (Pistard)
// Target: ^https?://pistard\.banq\.qc\.ca
// TODO: Implement Bibliotheque et Archives Nationale du Quebec (Pistard) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bibliotheque-et-archives-nationale-du-quebec-pistard.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bibliotheque et Archives Nationale du Quebec (Pistard)',
      translatorType: 4,
      target: '^https?://pistard\.banq\.qc\.ca',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2008-08-06 17:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
