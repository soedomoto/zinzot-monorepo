// Translator: Research Square
// Target: ^https?://www\.researchsquare\.com/(article|browse)
// TODO: Implement Research Square translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-research-square.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Research Square',
      translatorType: 4,
      target: '^https?://www\.researchsquare\.com/(article|browse)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-04-01 19:07:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
