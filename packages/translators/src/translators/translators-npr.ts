// Translator: NPR
// Target: ^https?://www\.npr\.org/
// TODO: Implement NPR translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-npr.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NPR',
      translatorType: 4,
      target: '^https?://www\.npr\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-13 21:08:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
