// Translator: FreePatentsOnline
// Target: ^https?://www\.freepatentsonline\.com/
// TODO: Implement FreePatentsOnline translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-freepatentsonline.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'FreePatentsOnline',
      translatorType: 4,
      target: '^https?://www\.freepatentsonline\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-13 17:39:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
