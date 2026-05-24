// Translator: FAO Publications
// Target: ^https?://www\.fao\.org/(publications|documents)/
// TODO: Implement FAO Publications translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-fao-publications.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'FAO Publications',
      translatorType: 4,
      target: '^https?://www\.fao\.org/(publications|documents)/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-04-01 16:44:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
