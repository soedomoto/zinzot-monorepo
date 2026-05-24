// Translator: Bluesky
// Target: ^https://bsky\.app/
// TODO: Implement Bluesky translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bluesky.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bluesky',
      translatorType: 4,
      target: '^https://bsky\.app/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-26 14:30:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
