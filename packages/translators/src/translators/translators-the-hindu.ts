// Translator: The Hindu
// Target: ^https?://www\.thehindu\.com/
// TODO: Implement The Hindu translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-hindu.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Hindu',
      translatorType: 4,
      target: '^https?://www\.thehindu\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-05 10:59:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
