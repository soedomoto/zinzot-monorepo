// Translator: UNZ Print Archive
// Target: ^https?://(www\.)?unz\.com/print
// TODO: Implement UNZ Print Archive translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-unz-print-archive.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'UNZ Print Archive',
      translatorType: 4,
      target: '^https?://(www\.)?unz\.com/print',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-23 03:39:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
