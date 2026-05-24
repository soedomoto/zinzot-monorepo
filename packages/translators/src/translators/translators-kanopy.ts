// Translator: Kanopy
// Target: ^https?://[^/]+\.kanopy\.com/
// TODO: Implement Kanopy translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-kanopy.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Kanopy',
      translatorType: 4,
      target: '^https?://[^/]+\.kanopy\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-16 23:36:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
