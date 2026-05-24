// Translator: CalMatters
// Target: ^https?://calmatters\.org/
// TODO: Implement CalMatters translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-calmatters.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CalMatters',
      translatorType: 4,
      target: '^https?://calmatters\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-07 18:07:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
