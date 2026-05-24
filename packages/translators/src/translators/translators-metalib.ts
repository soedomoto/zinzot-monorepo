// Translator: MetaLib
// Target: ^https?://[^/]*/V/
// TODO: Implement MetaLib translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-metalib.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'MetaLib',
      translatorType: 4,
      target: '^https?://[^/]*/V/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2017-01-01 15:26:24',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
