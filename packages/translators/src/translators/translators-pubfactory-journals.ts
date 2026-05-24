// Translator: PubFactory Journals
// Target: ^https://([^/]+/view/journals/.+\.xml|[^.]*journals\.[^/]+/search)\b
// TODO: Implement PubFactory Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pubfactory-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PubFactory Journals',
      translatorType: 4,
      target: '^https://([^/]+/view/journals/.+\.xml|[^.]*journals\.[^/]+/search)\b',
      minVersion: '5.0',
      maxVersion: '',
      priority: 200,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-06-13 17:11:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
