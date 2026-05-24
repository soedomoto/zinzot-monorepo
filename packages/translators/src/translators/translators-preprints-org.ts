// Translator: Preprints.org
// Target: ^https://www\.preprints\.org/
// TODO: Implement Preprints.org translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-preprints-org.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Preprints.org',
      translatorType: 4,
      target: '^https://www\.preprints\.org/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-23 07:21:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
