// Translator: Protein Data Bank
// Target: ^https?://www\.(pdb|rcsb)\.org/pdb/
// TODO: Implement Protein Data Bank translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-protein-data-bank.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Protein Data Bank',
      translatorType: 4,
      target: '^https?://www\.(pdb|rcsb)\.org/pdb/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-03 18:51:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
