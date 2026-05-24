// Translator: Qatar Digital Library
// Target: ^https?://(www\.)?qdl\.qa/
// TODO: Implement Qatar Digital Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-qatar-digital-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Qatar Digital Library',
      translatorType: 4,
      target: '^https?://(www\.)?qdl\.qa/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-08 23:32:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
