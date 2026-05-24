// Translator: OpenEdition Journals
// Target: ^https?://journals\.openedition\.org/
// TODO: Implement OpenEdition Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-openedition-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OpenEdition Journals',
      translatorType: 4,
      target: '^https?://journals\.openedition\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-02 00:22:25',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
