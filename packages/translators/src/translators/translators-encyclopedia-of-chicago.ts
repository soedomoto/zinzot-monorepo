// Translator: Encyclopedia of Chicago
// Target: ^https?://encyclopedia\.chicagohistory\.org/pages
// TODO: Implement Encyclopedia of Chicago translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-encyclopedia-of-chicago.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Encyclopedia of Chicago',
      translatorType: 4,
      target: '^https?://encyclopedia\.chicagohistory\.org/pages',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2016-11-01 18:30:35',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
