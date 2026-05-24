// Translator: Stitcher
// Target: ^https?://(www\.)?stitcher\.com/(search|show)/
// TODO: Implement Stitcher translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-stitcher.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Stitcher',
      translatorType: 4,
      target: '^https?://(www\.)?stitcher\.com/(search|show)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-03-10 04:41:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
