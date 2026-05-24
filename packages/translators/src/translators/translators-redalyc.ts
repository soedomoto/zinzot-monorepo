// Translator: REDALYC
// Target: ^https?://(www\.)?redalyc\.(uaemex\.mx|org)
// TODO: Implement REDALYC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-redalyc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'REDALYC',
      translatorType: 4,
      target: '^https?://(www\.)?redalyc\.(uaemex\.mx|org)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-23 04:12:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
