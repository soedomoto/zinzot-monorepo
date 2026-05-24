// Translator: Envidat
// Target: ^https://(www\.)?envidat.ch/
// TODO: Implement Envidat translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-envidat.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Envidat',
      translatorType: 4,
      target: '^https://(www\.)?envidat.ch/',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-04-29 03:15:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
