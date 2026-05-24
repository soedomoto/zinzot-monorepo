// Translator: Human Rights Watch
// Target: ^https?://www\.hrw\.org/
// TODO: Implement Human Rights Watch translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-human-rights-watch.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Human Rights Watch',
      translatorType: 4,
      target: '^https?://www\.hrw\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-14 03:16:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
