// Translator: Trove
// Target: ^https?://trove\.nla\.gov\.au/(?:newspaper|gazette|work|book|article|picture|music|map|collection|search)/
// TODO: Implement Trove translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-trove.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Trove',
      translatorType: 4,
      target: '^https?://trove\.nla\.gov\.au/(?:newspaper|gazette|work|book|article|picture|music|map|collection|search)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-01-29 19:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
