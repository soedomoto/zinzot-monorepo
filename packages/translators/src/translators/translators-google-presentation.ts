// Translator: Google Presentation
// Target: ^https?://docs\.google\.com/presentation/d/
// TODO: Implement Google Presentation translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-google-presentation.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Google Presentation',
      translatorType: 4,
      target: '^https?://docs\.google\.com/presentation/d/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-02-19 09:33:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
