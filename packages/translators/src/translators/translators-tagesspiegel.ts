// Translator: Tagesspiegel
// Target: ^https?://www\.tagesspiegel\.de
// TODO: Implement Tagesspiegel translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-tagesspiegel.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Tagesspiegel',
      translatorType: 4,
      target: '^https?://www\.tagesspiegel\.de',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-18 12:46:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
