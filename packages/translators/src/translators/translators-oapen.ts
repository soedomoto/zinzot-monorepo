// Translator: OAPEN
// Target: ^https?://library\.oapen\.org/
// TODO: Implement OAPEN translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-oapen.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OAPEN',
      translatorType: 4,
      target: '^https?://library\.oapen\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-22 00:17:40',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
