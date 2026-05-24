// Translator: Citizen Lab
// Target: ^https?://citizenlab\.ca/
// TODO: Implement Citizen Lab translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-citizen-lab.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Citizen Lab',
      translatorType: 4,
      target: '^https?://citizenlab\.ca/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-14 01:28:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
