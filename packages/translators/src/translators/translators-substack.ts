// Translator: Substack
// Target: ^https://([^.]+\.)?substack\.com/(p/|archive|home/post/)
// TODO: Implement Substack translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-substack.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Substack',
      translatorType: 4,
      target: '^https://([^.]+\.)?substack\.com/(p/|archive|home/post/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-02-03 20:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
