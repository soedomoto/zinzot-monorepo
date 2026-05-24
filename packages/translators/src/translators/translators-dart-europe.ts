// Translator: DART-Europe
// Target: ^https?://www\.dart-europe\.org
// TODO: Implement DART-Europe translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dart-europe.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DART-Europe',
      translatorType: 4,
      target: '^https?://www\.dart-europe\.org',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-05-04 03:09:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
