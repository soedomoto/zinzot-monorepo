// Translator: Aluka
// Target: ^https?://(www\.)aluka\.org/(stable/|struggles/search\?|struggles/collection/)
// TODO: Implement Aluka translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-aluka.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Aluka',
      translatorType: 4,
      target: '^https?://(www\.)aluka\.org/(stable/|struggles/search\?|struggles/collection/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-27 06:02:24',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
