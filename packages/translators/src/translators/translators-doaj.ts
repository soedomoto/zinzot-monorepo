// Translator: DOAJ
// Target: ^https?://(www\.)?doaj\.org/(article|search)/
// TODO: Implement DOAJ translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-doaj.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DOAJ',
      translatorType: 4,
      target: '^https?://(www\.)?doaj\.org/(article|search)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-09 20:47:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
