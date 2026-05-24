// Translator: The Straits Times
// Target: ^https?:\/\/(www.)?straitstimes.com\/
// TODO: Implement The Straits Times translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-straits-times.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Straits Times',
      translatorType: 4,
      target: '^https?:\/\/(www.)?straitstimes.com\/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-01-23 22:08:18',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
