// Translator: Gmail
// Target: ^https?://mail\.google\.com/
// TODO: Implement Gmail translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-gmail.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Gmail',
      translatorType: 4,
      target: '^https?://mail\.google\.com/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2017-01-01 16:53:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
