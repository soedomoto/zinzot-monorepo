// Translator: CNKI
// Target: ^https?://([^/]+\.)?cnki\.net
// TODO: Implement CNKI translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cnki.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CNKI',
      translatorType: 4,
      target: '^https?://([^/]+\.)?cnki\.net',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-11-27 05:30:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
