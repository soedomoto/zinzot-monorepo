// Translator: Google Research
// Target: ^https://research\.google/(pubs|people|research-areas|teams)
// TODO: Implement Google Research translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-google-research.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Google Research',
      translatorType: 4,
      target: '^https://research\.google/(pubs|people|research-areas|teams)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-01-01 19:36:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
