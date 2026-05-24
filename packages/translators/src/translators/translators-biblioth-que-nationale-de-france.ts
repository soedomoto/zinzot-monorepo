// Translator: Bibliothèque nationale de France
// Target: ^https?://[^/]*catalogue\.bnf\.fr
// TODO: Implement Bibliothèque nationale de France translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-biblioth-que-nationale-de-france.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bibliothèque nationale de France',
      translatorType: 4,
      target: '^https?://[^/]*catalogue\.bnf\.fr',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-01-09 03:40:58',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
