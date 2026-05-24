// Translator: RAND
// Target: ^https://www\.rand\.org/(pubs/|search\.html)
// TODO: Implement RAND translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-rand.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'RAND',
      translatorType: 4,
      target: '^https://www\.rand\.org/(pubs/|search\.html)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-10 16:23:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
