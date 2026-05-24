// Translator: EBSCO Discovery Layer
// Target: ^https?://(discovery|research)\.ebsco\.com/
// TODO: Implement EBSCO Discovery Layer translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ebsco-discovery-layer.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'EBSCO Discovery Layer',
      translatorType: 4,
      target: '^https?://(discovery|research)\.ebsco\.com/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-02-04 04:24:48',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
