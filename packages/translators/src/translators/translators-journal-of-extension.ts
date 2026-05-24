// Translator: Journal of Extension
// Target: ^https?://www\.joe\.org/
// TODO: Implement Journal of Extension translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-journal-of-extension.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Journal of Extension',
      translatorType: 4,
      target: '^https?://www\.joe\.org/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-01 18:47:05',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
