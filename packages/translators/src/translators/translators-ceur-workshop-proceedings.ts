// Translator: CEUR Workshop Proceedings
// Target: https?://ceur-ws\.org/Vol-
// TODO: Implement CEUR Workshop Proceedings translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ceur-workshop-proceedings.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CEUR Workshop Proceedings',
      translatorType: 4,
      target: 'https?://ceur-ws\.org/Vol-',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-25 17:43:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
