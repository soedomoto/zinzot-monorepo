// Translator: Alexander Street Press
// Target: ^https?://(www\.)alexanderstreet
// TODO: Implement Alexander Street Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-alexander-street-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Alexander Street Press',
      translatorType: 4,
      target: '^https?://(www\.)alexanderstreet',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:42:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
