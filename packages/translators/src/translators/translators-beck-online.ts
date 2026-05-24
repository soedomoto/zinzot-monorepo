// Translator: beck-online
// Target: ^https?://beck[-.]online\.beck\.de/
// TODO: Implement beck-online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-beck-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'beck-online',
      translatorType: 4,
      target: '^https?://beck[-.]online\.beck\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-11 15:41:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
