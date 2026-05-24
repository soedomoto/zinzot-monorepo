// Translator: Pastebin
// Target: ^https?://pastebin\.com
// TODO: Implement Pastebin translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pastebin.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Pastebin',
      translatorType: 4,
      target: '^https?://pastebin\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-22 12:41:39',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
