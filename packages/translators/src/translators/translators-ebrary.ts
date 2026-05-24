// Translator: ebrary
// Target: ^https?://site\.ebrary\.com/.+(docDetail|search|detail)\.action\?
// TODO: Implement ebrary translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ebrary.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ebrary',
      translatorType: 4,
      target: '^https?://site\.ebrary\.com/.+(docDetail|search|detail)\.action\?',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcv',
      lastUpdated: '2015-08-29 22:03:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
