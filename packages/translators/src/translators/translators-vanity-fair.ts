// Translator: Vanity Fair
// Target: ^https?://www\.vanityfair\.com/
// TODO: Implement Vanity Fair translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-vanity-fair.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Vanity Fair',
      translatorType: 4,
      target: '^https?://www\.vanityfair\.com/',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-13 22:24:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
