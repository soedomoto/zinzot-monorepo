// Translator: Annual Reviews
// Target: ^https?://[^/]*annualreviews\.org(:[\d]+)?(?=/)[^?]*(/(toc|journal|doi)/|showMost(Read|Cited)Articles|doSearch)
// TODO: Implement Annual Reviews translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-annual-reviews.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Annual Reviews',
      translatorType: 4,
      target: '^https?://[^/]*annualreviews\.org(:[\d]+)?(?=/)[^?]*(/(toc|journal|doi)/|showMost(Read|Cited)Articles|doSearch)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 150,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-08-02 12:48:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
