// Translator: Foreign Affairs
// Target: ^https?://www\.foreignaffairs\.com
// TODO: Implement Foreign Affairs translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-foreign-affairs.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Foreign Affairs',
      translatorType: 4,
      target: '^https?://www\.foreignaffairs\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-01-21 16:35:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
