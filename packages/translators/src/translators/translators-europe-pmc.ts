// Translator: Europe PMC
// Target: ^https?://europepmc\.org/
// TODO: Implement Europe PMC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-europe-pmc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Europe PMC',
      translatorType: 4,
      target: '^https?://europepmc\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-23 01:38:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
