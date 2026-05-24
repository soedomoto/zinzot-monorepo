// Translator: SVT Nyheter
// Target: ^https?://www\.svt\.se/nyheter/
// TODO: Implement SVT Nyheter translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-svt-nyheter.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SVT Nyheter',
      translatorType: 4,
      target: '^https?://www\.svt\.se/nyheter/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-06-27 15:32:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
