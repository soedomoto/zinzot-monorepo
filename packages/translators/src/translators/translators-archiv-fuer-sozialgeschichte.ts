// Translator: Archiv fuer Sozialgeschichte
// Target: ^https?://library\.fes\.de/jportal/
// TODO: Implement Archiv fuer Sozialgeschichte translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-archiv-fuer-sozialgeschichte.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Archiv fuer Sozialgeschichte',
      translatorType: 4,
      target: '^https?://library\.fes\.de/jportal/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcbv',
      lastUpdated: '2013-05-15 20:05:47',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
