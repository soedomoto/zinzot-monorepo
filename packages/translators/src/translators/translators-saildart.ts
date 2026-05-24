// Translator: SAILDART
// Target: ^https?://(www\.)?saildart\.org/
// TODO: Implement SAILDART translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-saildart.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SAILDART',
      translatorType: 4,
      target: '^https?://(www\.)?saildart\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-26 17:34:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
