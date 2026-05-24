// Translator: clinicaltrials.gov
// Target: ^https://(classic\.clinicaltrials\.gov/ct2/(show|results)|(www\.)?clinicaltrials\.gov/(study|search))\b
// TODO: Implement clinicaltrials.gov translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-clinicaltrials-gov.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'clinicaltrials.gov',
      translatorType: 4,
      target: '^https://(classic\.clinicaltrials\.gov/ct2/(show|results)|(www\.)?clinicaltrials\.gov/(study|search))\b',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-01-15 17:45:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
