// Translator: Business Standard
// Target: ^https?://www\.business-standard\.com
// TODO: Implement Business Standard translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-business-standard.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Business Standard',
      translatorType: 4,
      target: '^https?://www\.business-standard\.com',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-01 18:25:24',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
