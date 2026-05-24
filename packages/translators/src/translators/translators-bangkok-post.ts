// Translator: Bangkok Post
// Target: ^https://www\.bangkokpost\.com/[a-z0-9-]+/([a-z0-9-]+/)?[0-9]+
// TODO: Implement Bangkok Post translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bangkok-post.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bangkok Post',
      translatorType: 4,
      target: '^https://www\.bangkokpost\.com/[a-z0-9-]+/([a-z0-9-]+/)?[0-9]+',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-06-18 20:46:45',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
