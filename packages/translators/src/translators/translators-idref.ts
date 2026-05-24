// Translator: Idref
// Target: ^https?://www\.idref\.fr/
// TODO: Implement Idref translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-idref.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Idref',
      translatorType: 4,
      target: '^https?://www\.idref\.fr/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-29 09:01:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
