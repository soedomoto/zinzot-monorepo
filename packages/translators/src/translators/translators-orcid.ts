// Translator: ORCID
// Target: ^https?://orcid\.org/
// TODO: Implement ORCID translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-orcid.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ORCID',
      translatorType: 4,
      target: '^https?://orcid\.org/',
      minVersion: '4.0.29.11',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-10-12 18:52:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
