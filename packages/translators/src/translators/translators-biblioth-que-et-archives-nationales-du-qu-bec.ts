// Translator: Bibliothèque et Archives Nationales du Québec
// Target: ^https?://catalogue\.banq\.qc\.ca/
// TODO: Implement Bibliothèque et Archives Nationales du Québec translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-biblioth-que-et-archives-nationales-du-qu-bec.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bibliothèque et Archives Nationales du Québec',
      translatorType: 4,
      target: '^https?://catalogue\.banq\.qc\.ca/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2015-06-29 17:02:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
