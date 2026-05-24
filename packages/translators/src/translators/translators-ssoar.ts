// Translator: SSOAR
// Target: ^https?://www\.ssoar\.info/
// TODO: Implement SSOAR translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ssoar.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SSOAR',
      translatorType: 4,
      target: '^https?://www\.ssoar\.info/',
      minVersion: '3',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2016-06-15 21:48:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
