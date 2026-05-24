// Translator: Canadiana.ca
// Target: ^https?://eco\.canadiana\.ca
// TODO: Implement Canadiana.ca translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-canadiana-ca.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Canadiana.ca',
      translatorType: 4,
      target: '^https?://eco\.canadiana\.ca',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2012-07-03 16:44:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
