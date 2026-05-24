// Translator: Twitter
// Target: ^https?://([^/]+\.)?(twitter|x)\.com/
// TODO: Implement Twitter translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-twitter.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Twitter',
      translatorType: 4,
      target: '^https?://([^/]+\.)?(twitter|x)\.com/',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-05-24 17:08:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
