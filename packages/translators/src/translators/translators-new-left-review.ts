// Translator: New Left Review
// Target: ^https?://(www\.)?newleftreview\.org/issues/
// TODO: Implement New Left Review translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-new-left-review.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'New Left Review',
      translatorType: 4,
      target: '^https?://(www\.)?newleftreview\.org/issues/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-16 21:17:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
