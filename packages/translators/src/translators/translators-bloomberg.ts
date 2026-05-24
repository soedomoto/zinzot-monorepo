// Translator: Bloomberg
// Target: ^https?://(www)?\.bloomberg\.com
// TODO: Implement Bloomberg translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bloomberg.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bloomberg',
      translatorType: 4,
      target: '^https?://(www)?\.bloomberg\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-08 20:56:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
