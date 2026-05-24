// Translator: Dryad Digital Repository
// Target: ^https?://(www\.)?datadryad\.org/
// TODO: Implement Dryad Digital Repository translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dryad-digital-repository.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Dryad Digital Repository',
      translatorType: 4,
      target: '^https?://(www\.)?datadryad\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 02:15:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
