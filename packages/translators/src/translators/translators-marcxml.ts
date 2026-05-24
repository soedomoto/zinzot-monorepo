// Translator: MARCXML
// Target: xml
// TODO: Implement MARCXML translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-marcxml.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'MARCXML',
      translatorType: 1,
      target: 'xml',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-28 16:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
