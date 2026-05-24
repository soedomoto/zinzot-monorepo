// Translator: Superlib
// Target: ^https?://(book|jour)\.ucdrs\.superlib\.net/(search|views/specific)
// TODO: Implement Superlib translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-superlib.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Superlib',
      translatorType: 4,
      target: '^https?://(book|jour)\.ucdrs\.superlib\.net/(search|views/specific)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-18 19:44:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
