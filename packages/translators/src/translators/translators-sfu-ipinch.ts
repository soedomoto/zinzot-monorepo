// Translator: SFU IPinCH
// Target: ^https?://[^/]*sfu\.ca/kbipinch/(records|browse|search)/
// TODO: Implement SFU IPinCH translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sfu-ipinch.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SFU IPinCH',
      translatorType: 4,
      target: '^https?://[^/]*sfu\.ca/kbipinch/(records|browse|search)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2013-06-19 10:30:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
