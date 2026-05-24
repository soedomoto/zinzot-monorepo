// Translator: Vice
// Target: ^https?://(.+?\.)?vice\.com/
// TODO: Implement Vice translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-vice.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Vice',
      translatorType: 4,
      target: '^https?://(.+?\.)?vice\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-01-03 23:13:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
