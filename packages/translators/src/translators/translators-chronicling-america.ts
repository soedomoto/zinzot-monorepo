// Translator: Chronicling America
// Target: ^https?://chroniclingamerica\.loc\.gov
// TODO: Implement Chronicling America translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-chronicling-america.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Chronicling America',
      translatorType: 4,
      target: '^https?://chroniclingamerica\.loc\.gov',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2013-03-31 23:29:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
