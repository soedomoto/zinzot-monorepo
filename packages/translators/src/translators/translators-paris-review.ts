// Translator: Paris Review
// Target: ^https?://www\.theparisreview\.org/
// TODO: Implement Paris Review translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-paris-review.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Paris Review',
      translatorType: 4,
      target: '^https?://www\.theparisreview\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-22 12:19:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
