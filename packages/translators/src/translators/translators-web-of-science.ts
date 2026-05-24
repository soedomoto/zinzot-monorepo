// Translator: Web of Science
// Target: ^https?://([^/]+\.)?webofknowledge\.com/
// TODO: Implement Web of Science translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-web-of-science.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Web of Science',
      translatorType: 4,
      target: '^https?://([^/]+\.)?webofknowledge\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsib',
      lastUpdated: '2015-06-04 04:20:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
