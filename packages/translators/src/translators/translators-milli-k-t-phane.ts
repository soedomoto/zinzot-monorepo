// Translator: Milli Kütüphane
// Target: ^https?://(www\.)?kasif\.mkutup\.gov\.tr/
// TODO: Implement Milli Kütüphane translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-milli-k-t-phane.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Milli Kütüphane',
      translatorType: 4,
      target: '^https?://(www\.)?kasif\.mkutup\.gov\.tr/',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-15 18:16:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
