// Translator: Washington Post
// Target: ^https?://www\.washingtonpost\.com/
// TODO: Implement Washington Post translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-washington-post.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Washington Post',
      translatorType: 4,
      target: '^https?://www\.washingtonpost\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-01-27 20:30:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
