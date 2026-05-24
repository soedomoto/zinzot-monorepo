// Translator: Cell Press
// Target: ^https?://([^/]*\.)?cell\.com
// TODO: Implement Cell Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cell-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Cell Press',
      translatorType: 4,
      target: '^https?://([^/]*\.)?cell\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-06 22:03:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
