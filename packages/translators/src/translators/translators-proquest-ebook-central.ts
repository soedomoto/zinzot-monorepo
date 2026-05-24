// Translator: ProQuest Ebook Central
// Target: ^https?://ebookcentral\.proquest\.com/(ebc/)?lib/
// TODO: Implement ProQuest Ebook Central translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-proquest-ebook-central.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ProQuest Ebook Central',
      translatorType: 4,
      target: '^https?://ebookcentral\.proquest\.com/(ebc/)?lib/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-03 17:15:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
