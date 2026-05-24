// Translator: Datacite JSON
// Target: json
// TODO: Implement Datacite JSON translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-datacite-json.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Datacite JSON',
      translatorType: 1,
      target: 'json',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-04-29 03:15:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
