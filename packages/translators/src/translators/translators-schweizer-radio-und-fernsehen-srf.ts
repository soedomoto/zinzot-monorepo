// Translator: Schweizer Radio und Fernsehen SRF
// Target: ^https?://(www\.)?srf\.ch/sendungen/
// TODO: Implement Schweizer Radio und Fernsehen SRF translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-schweizer-radio-und-fernsehen-srf.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Schweizer Radio und Fernsehen SRF',
      translatorType: 4,
      target: '^https?://(www\.)?srf\.ch/sendungen/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-24 22:06:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
