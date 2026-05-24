// Translator: Wikimedia Commons
// Target: ^https?://commons\.wikimedia\.org
// TODO: Implement Wikimedia Commons translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wikimedia-commons.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wikimedia Commons',
      translatorType: 4,
      target: '^https?://commons\.wikimedia\.org',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-06 00:15:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
