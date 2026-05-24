// Translator: Cascadilla Proceedings Project
// Target: ^https?://(www\.)?lingref\.com/
// TODO: Implement Cascadilla Proceedings Project translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cascadilla-proceedings-project.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Cascadilla Proceedings Project',
      translatorType: 4,
      target: '^https?://(www\.)?lingref\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-29 00:35:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
