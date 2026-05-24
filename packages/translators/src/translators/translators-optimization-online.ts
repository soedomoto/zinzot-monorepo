// Translator: Optimization Online
// Target: ^https?://optimization-online\.org/
// TODO: Implement Optimization Online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-optimization-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Optimization Online',
      translatorType: 4,
      target: '^https?://optimization-online\.org/',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-07-15 13:50:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
