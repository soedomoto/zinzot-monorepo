// Translator: Failed Architecture
// Target: ^https?://failedarchitecture\.com/
// TODO: Implement Failed Architecture translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-failed-architecture.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Failed Architecture',
      translatorType: 4,
      target: '^https?://failedarchitecture\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-05 21:18:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
