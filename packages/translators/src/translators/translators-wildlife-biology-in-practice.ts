// Translator: Wildlife Biology in Practice
// Target: ^https?://[^/]*socpvs\.org/journals/index\.php/wbp
// TODO: Implement Wildlife Biology in Practice translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wildlife-biology-in-practice.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wildlife Biology in Practice',
      translatorType: 4,
      target: '^https?://[^/]*socpvs\.org/journals/index\.php/wbp',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 15:47:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
