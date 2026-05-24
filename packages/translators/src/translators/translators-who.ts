// Translator: WHO
// Target: ^https?://apps\.who\.int/iris/
// TODO: Implement WHO translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-who.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'WHO',
      translatorType: 12,
      target: '^https?://apps\.who\.int/iris/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 96,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-06 12:21:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
