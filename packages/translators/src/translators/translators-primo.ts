// Translator: Primo
// Target: /primo_library/|/nebis/|^https?://www\.recherche-portal\.ch/zbz/
// TODO: Implement Primo translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-primo.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Primo',
      translatorType: 4,
      target: '/primo_library/|/nebis/|^https?://www\.recherche-portal\.ch/zbz/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 101,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2020-02-04 01:29:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
