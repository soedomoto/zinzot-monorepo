// Translator: zbMATH
// Target: ^https?://(www\.)?zbmath\.org/
// TODO: Implement zbMATH translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-zbmath.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'zbMATH',
      translatorType: 4,
      target: '^https?://(www\.)?zbmath\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-10 18:47:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
