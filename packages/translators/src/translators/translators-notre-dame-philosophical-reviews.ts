// Translator: Notre Dame Philosophical Reviews
// Target: ^https?://ndpr\.nd\.edu/
// TODO: Implement Notre Dame Philosophical Reviews translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-notre-dame-philosophical-reviews.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Notre Dame Philosophical Reviews',
      translatorType: 4,
      target: '^https?://ndpr\.nd\.edu/',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-31 17:03:45',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
