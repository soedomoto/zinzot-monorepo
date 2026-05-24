// Translator: Finna
// Target: ^https?://([^/]+\.)?finna\.fi/
// TODO: Implement Finna translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-finna.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Finna',
      translatorType: 4,
      target: '^https?://([^/]+\.)?finna\.fi/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 150,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-04 20:33:47',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
