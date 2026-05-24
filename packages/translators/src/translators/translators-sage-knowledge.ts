// Translator: SAGE Knowledge
// Target: ^https?://sk\.sagepub\.com/
// TODO: Implement SAGE Knowledge translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sage-knowledge.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SAGE Knowledge',
      translatorType: 4,
      target: '^https?://sk\.sagepub\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-11-11 14:54:48',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
