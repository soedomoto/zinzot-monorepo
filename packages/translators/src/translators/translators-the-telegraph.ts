// Translator: The Telegraph
// Target: ^https?://[^/]*telegraph\.co\.uk/
// TODO: Implement The Telegraph translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-telegraph.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Telegraph',
      translatorType: 4,
      target: '^https?://[^/]*telegraph\.co\.uk/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-10 22:56:17',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
