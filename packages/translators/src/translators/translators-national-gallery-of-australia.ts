// Translator: National Gallery of Australia
// Target: ^https?://searchthecollection\.nga\.gov\.au/
// TODO: Implement National Gallery of Australia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-gallery-of-australia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Gallery of Australia',
      translatorType: 4,
      target: '^https?://searchthecollection\.nga\.gov\.au/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-25 17:02:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
