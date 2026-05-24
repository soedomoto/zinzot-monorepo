// Translator: Bryn Mawr Classical Review
// Target: ^https?://bmcr\.brynmawr\.edu/
// TODO: Implement Bryn Mawr Classical Review translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bryn-mawr-classical-review.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bryn Mawr Classical Review',
      translatorType: 4,
      target: '^https?://bmcr\.brynmawr\.edu/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-22 05:27:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
