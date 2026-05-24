// Translator: Emerald Insight
// Target: ^https?://www\.emerald\.com/insight/(publication/|content/|search\?)
// TODO: Implement Emerald Insight translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-emerald-insight.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Emerald Insight',
      translatorType: 4,
      target: '^https?://www\.emerald\.com/insight/(publication/|content/|search\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-08-29 15:40:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
