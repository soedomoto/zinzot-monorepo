// Translator: UChicago VuFind
// Target: ^https?://([^/]+\.)?lib\.uchicago\.edu/
// TODO: Implement UChicago VuFind translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-uchicago-vufind.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'UChicago VuFind',
      translatorType: 4,
      target: '^https?://([^/]+\.)?lib\.uchicago\.edu/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-08-17 20:16:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
