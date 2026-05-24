// Translator: CLACSO
// Target: ^https?://biblioteca\.clacso\.edu\.ar/gsdl/cgi-bin/
// TODO: Implement CLACSO translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-clacso.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CLACSO',
      translatorType: 4,
      target: '^https?://biblioteca\.clacso\.edu\.ar/gsdl/cgi-bin/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'g',
      lastUpdated: '2013-02-28 14:47:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
