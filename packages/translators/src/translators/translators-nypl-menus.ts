// Translator: NYPL Menus
// Target: ^https?://menus\.nypl\.org/
// TODO: Implement NYPL Menus translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nypl-menus.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NYPL Menus',
      translatorType: 4,
      target: '^https?://menus\.nypl\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-23 00:03:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
