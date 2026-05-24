// Translator: University Press Scholarship
// Target: ^https?://[^/]+\.universitypressscholarship\.com/
// TODO: Implement University Press Scholarship translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-university-press-scholarship.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'University Press Scholarship',
      translatorType: 4,
      target: '^https?://[^/]+\.universitypressscholarship\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-06 21:55:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
