// Translator: Foreign Policy
// Target: ^https?://[^/]*foreignpolicy\.com
// TODO: Implement Foreign Policy translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-foreign-policy.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Foreign Policy',
      translatorType: 4,
      target: '^https?://[^/]*foreignpolicy\.com',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-01-04 16:38:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
