// Translator: Harvard Caselaw Access Project
// Target: ^https://(cite\.)?case\.law
// TODO: Implement Harvard Caselaw Access Project translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-harvard-caselaw-access-project.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Harvard Caselaw Access Project',
      translatorType: 4,
      target: '^https://(cite\.)?case\.law',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-01-17 01:22:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
