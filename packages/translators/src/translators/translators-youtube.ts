// Translator: YouTube
// Target: ^https?://([^/]+\.)?youtube\.com/
// TODO: Implement YouTube translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-youtube.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'YouTube',
      translatorType: 4,
      target: '^https?://([^/]+\.)?youtube\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-04-05 04:04:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
