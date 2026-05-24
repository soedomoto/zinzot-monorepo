// Translator: AMS MathSciNet
// Target: ^https?://mathscinet\.ams\.[^/]*/mathscinet/(article\?|publications-search\?|author\?)
// TODO: Implement AMS MathSciNet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ams-mathscinet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AMS MathSciNet',
      translatorType: 4,
      target: '^https?://mathscinet\.ams\.[^/]*/mathscinet/(article\?|publications-search\?|author\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-07-14 11:04:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
