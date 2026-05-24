// Translator: Literary Hub
// Target: ^https?://lithub\.com/
// TODO: Implement Literary Hub translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-literary-hub.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Literary Hub',
      translatorType: 4,
      target: '^https?://lithub\.com/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-04-22 01:23:39',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
