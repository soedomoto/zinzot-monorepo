// Translator: Digital Humanities Quarterly
// Target: ^https?://(www\.)?digitalhumanities\.org/(dhq)?
// TODO: Implement Digital Humanities Quarterly translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-digital-humanities-quarterly.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Digital Humanities Quarterly',
      translatorType: 4,
      target: '^https?://(www\.)?digitalhumanities\.org/(dhq)?',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-05-15 15:07:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
