// Translator: Wired
// Target: ^https?://(www\.)?wired\.(com|co\.uk)
// TODO: Implement Wired translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wired.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wired',
      translatorType: 4,
      target: '^https?://(www\.)?wired\.(com|co\.uk)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-03-30 19:51:18',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
