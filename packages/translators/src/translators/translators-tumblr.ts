// Translator: Tumblr
// Target: ^https?://[^/]+\.tumblr\.com/
// TODO: Implement Tumblr translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-tumblr.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Tumblr',
      translatorType: 4,
      target: '^https?://[^/]+\.tumblr\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-01 23:04:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
