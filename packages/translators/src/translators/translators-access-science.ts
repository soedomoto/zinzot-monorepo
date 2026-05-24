// Translator: Access Science
// Target: ^https?://www\.accessscience\.com/
// TODO: Implement Access Science translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-access-science.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Access Science',
      translatorType: 4,
      target: '^https?://www\.accessscience\.com/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-10-17 20:19:39',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
