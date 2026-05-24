// Translator: AEA Web
// Target: ^https?://www\.aeaweb\.org/(articles|journals|issues)
// TODO: Implement AEA Web translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-aea-web.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AEA Web',
      translatorType: 4,
      target: '^https?://www\.aeaweb\.org/(articles|journals|issues)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-05-08 17:50:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
