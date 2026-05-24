// Translator: PhilPapers
// Target: ^https?://phil(papers|archive)\.org/
// TODO: Implement PhilPapers translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-philpapers.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PhilPapers',
      translatorType: 4,
      target: '^https?://phil(papers|archive)\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-09-16 03:30:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
