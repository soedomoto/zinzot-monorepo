// Translator: Peeters
// Target: ^https?://(www\.)?poj\.peeters-leuven\.be/content\.php
// TODO: Implement Peeters translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-peeters.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Peeters',
      translatorType: 4,
      target: '^https?://(www\.)?poj\.peeters-leuven\.be/content\.php',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-03-27 05:23:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
