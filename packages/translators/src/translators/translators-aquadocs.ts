// Translator: AquaDocs
// Target: ^https?://aquadocs\.org/(handle|discover|browse)
// TODO: Implement AquaDocs translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-aquadocs.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AquaDocs',
      translatorType: 4,
      target: '^https?://aquadocs\.org/(handle|discover|browse)',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-24 02:41:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
