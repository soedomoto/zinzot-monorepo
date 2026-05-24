// Translator: Old Bailey Online
// Target: ^https?://www\.oldbaileyonline\.org/
// TODO: Implement Old Bailey Online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-old-bailey-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Old Bailey Online',
      translatorType: 4,
      target: '^https?://www\.oldbaileyonline\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-05-08 16:45:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
