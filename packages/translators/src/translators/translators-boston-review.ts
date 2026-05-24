// Translator: Boston Review
// Target: ^https?://(www\.)?bostonreview\.net/
// TODO: Implement Boston Review translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-boston-review.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Boston Review',
      translatorType: 4,
      target: '^https?://(www\.)?bostonreview\.net/',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-18 06:17:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
