// Translator: The Met
// Target: ^https?://(?:www\.)?metmuseum\.org/art/collection
// TODO: Implement The Met translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-met.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Met',
      translatorType: 4,
      target: '^https?://(?:www\.)?metmuseum\.org/art/collection',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-21 18:22:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
