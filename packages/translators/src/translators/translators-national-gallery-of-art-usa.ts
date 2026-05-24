// Translator: National Gallery of Art - USA
// Target: ^https?://www\.nga\.gov/
// TODO: Implement National Gallery of Art - USA translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-gallery-of-art-usa.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Gallery of Art - USA',
      translatorType: 4,
      target: '^https?://www\.nga\.gov/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-08 03:45:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
