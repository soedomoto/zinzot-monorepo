// Translator: Haaretz
// Target: ^https?://www\.haaretz\.(co\.il|com)/
// TODO: Implement Haaretz translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-haaretz.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Haaretz',
      translatorType: 4,
      target: '^https?://www\.haaretz\.(co\.il|com)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-11-05 08:15:35',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
