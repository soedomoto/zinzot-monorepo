// Translator: APA PsycNet
// Target: ^https?://(psycnet|doi)\.apa\.org/
// TODO: Implement APA PsycNet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-apa-psycnet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'APA PsycNet',
      translatorType: 4,
      target: '^https?://(psycnet|doi)\.apa\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-10 19:55:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
