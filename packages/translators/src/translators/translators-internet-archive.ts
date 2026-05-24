// Translator: Internet Archive
// Target: ^https?://(www\.)?archive\.org/
// TODO: Implement Internet Archive translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-internet-archive.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Internet Archive',
      translatorType: 4,
      target: '^https?://(www\.)?archive\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-07-16 13:38:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
