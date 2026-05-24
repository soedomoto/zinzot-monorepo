// Translator: Douban
// Target: ^https?://(www|book)\.douban\.com/(subject|doulist|people/[a-zA-Z0-9._]*/(do|wish|collect)|.*?status=(do|wish|collect)|group/[0-9]*?/collection|tag)
// TODO: Implement Douban translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-douban.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Douban',
      translatorType: 4,
      target: '^https?://(www|book)\.douban\.com/(subject|doulist|people/[a-zA-Z0-9._]*/(do|wish|collect)|.*?status=(do|wish|collect)|group/[0-9]*?/collection|tag)',
      minVersion: '2.0rc1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-08-08 19:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
