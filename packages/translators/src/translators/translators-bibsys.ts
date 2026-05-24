// Translator: BIBSYS
// Target: ^https?://ask\.bibsys\.no/ask/action
// TODO: Implement BIBSYS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bibsys.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BIBSYS',
      translatorType: 4,
      target: '^https?://ask\.bibsys\.no/ask/action',
      minVersion: '1.0.0b4.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:44:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
