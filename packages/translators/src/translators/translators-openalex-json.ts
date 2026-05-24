// Translator: OpenAlex JSON
// Target: json
// TODO: Implement OpenAlex JSON translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-openalex-json.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OpenAlex JSON',
      translatorType: 1,
      target: 'json',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-29 14:16:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
