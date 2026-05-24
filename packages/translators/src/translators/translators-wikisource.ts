// Translator: Wikisource
// Target: ^https?://en\.wikisource\.org/w
// TODO: Implement Wikisource translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wikisource.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wikisource',
      translatorType: 4,
      target: '^https?://en\.wikisource\.org/w',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-06 00:17:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
