// Translator: INSPIRE
// Target: ^https?://inspirehep\.net/
// TODO: Implement INSPIRE translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-inspire.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'INSPIRE',
      translatorType: 4,
      target: '^https?://inspirehep\.net/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-04-06 18:53:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
