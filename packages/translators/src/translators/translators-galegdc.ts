// Translator: GaleGDC
// Target: /gdc/ncco|/gdc/xsearch|/gdc/artemis
// TODO: Implement GaleGDC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-galegdc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'GaleGDC',
      translatorType: 4,
      target: '/gdc/ncco|/gdc/xsearch|/gdc/artemis',
      minVersion: '3.0',
      maxVersion: '',
      priority: 270,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2014-08-26 03:45:45',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
