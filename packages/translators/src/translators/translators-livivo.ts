// Translator: LIVIVO
// Target: ^https?://www\.livivo\.de/
// TODO: Implement LIVIVO translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-livivo.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'LIVIVO',
      translatorType: 4,
      target: '^https?://www\.livivo\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-31 17:55:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
