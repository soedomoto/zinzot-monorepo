// Translator: Medium
// Target: ^https?://([^.]+\.)?medium\.com
// TODO: Implement Medium translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-medium.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Medium',
      translatorType: 4,
      target: '^https?://([^.]+\.)?medium\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-20 01:55:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
