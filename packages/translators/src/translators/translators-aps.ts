// Translator: APS
// Target: ^https?://journals\.aps\.org/([^/]+/(abstract|supplemental|references|cited-by|issues)/|search(\?|/))
// TODO: Implement APS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-aps.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'APS',
      translatorType: 4,
      target: '^https?://journals\.aps\.org/([^/]+/(abstract|supplemental|references|cited-by|issues)/|search(\?|/))',
      minVersion: '3.0.12',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-11-21 18:55:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
