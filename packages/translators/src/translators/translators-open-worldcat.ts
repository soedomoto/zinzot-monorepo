// Translator: Open WorldCat
// Target: ^https?://([^/]+\.)?worldcat\.org/
// TODO: Implement Open WorldCat translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-open-worldcat.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Open WorldCat',
      translatorType: 12,
      target: '^https?://([^/]+\.)?worldcat\.org/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-12-17 15:45:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
