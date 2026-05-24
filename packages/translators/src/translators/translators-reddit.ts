// Translator: reddit
// Target: ^https?://[^/]+\.reddit\.com/
// TODO: Implement reddit translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-reddit.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'reddit',
      translatorType: 4,
      target: '^https?://[^/]+\.reddit\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-05-01 14:55:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
