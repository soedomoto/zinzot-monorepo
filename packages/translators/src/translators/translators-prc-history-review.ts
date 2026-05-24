// Translator: PRC History Review
// Target: ^https?://(www\.)?prchistory\.org/
// TODO: Implement PRC History Review translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-prc-history-review.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PRC History Review',
      translatorType: 4,
      target: '^https?://(www\.)?prchistory\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-30 18:33:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
