// Translator: Ovid
// Target: (gw2|asinghal|sp|ovid)[^/]+/ovidweb\.cgi
// TODO: Implement Ovid translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ovid.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Ovid',
      translatorType: 4,
      target: '(gw2|asinghal|sp|ovid)[^/]+/ovidweb\.cgi',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-03 22:05:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
