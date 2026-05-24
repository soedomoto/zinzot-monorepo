// Translator: SIPRI
// Target: ^https?://(www\.)?sipri\.org/
// TODO: Implement SIPRI translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sipri.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SIPRI',
      translatorType: 4,
      target: '^https?://(www\.)?sipri\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-16 23:05:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
