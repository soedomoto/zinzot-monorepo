// Translator: OVID Tagged
// Target: txt
// TODO: Implement OVID Tagged translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ovid-tagged.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OVID Tagged',
      translatorType: 1,
      target: 'txt',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-03 22:05:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
