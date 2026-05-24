// Translator: ResearchGate
// Target: ^https?://www\.researchgate\.net/
// TODO: Implement ResearchGate translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-researchgate.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ResearchGate',
      translatorType: 4,
      target: '^https?://www\.researchgate\.net/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-10-18 04:03:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
