// Translator: Scholia
// Target: ^https?://scholia\.toolforge\.org/work/Q
// TODO: Implement Scholia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-scholia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Scholia',
      translatorType: 4,
      target: '^https?://scholia\.toolforge\.org/work/Q',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-29 16:59:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
