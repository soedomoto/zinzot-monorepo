// Translator: Huff Post
// Target: ^https?://www\.huffingtonpost\.com
// TODO: Implement Huff Post translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-huff-post.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Huff Post',
      translatorType: 4,
      target: '^https?://www\.huffingtonpost\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-10-31 21:35:41',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
