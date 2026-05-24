// Translator: Epicurious
// Target: ^https?://www\.epicurious\.com/(tools/searchresults|recipes/food/views)
// TODO: Implement Epicurious translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-epicurious.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Epicurious',
      translatorType: 4,
      target: '^https?://www\.epicurious\.com/(tools/searchresults|recipes/food/views)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-14 10:54:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
