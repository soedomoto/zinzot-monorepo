// Translator: Stanford University Press
// Target: ^https://www\.sup\.org/(books|search)/
// TODO: Implement Stanford University Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-stanford-university-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Stanford University Press',
      translatorType: 4,
      target: '^https://www\.sup\.org/(books|search)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-01 17:49:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
