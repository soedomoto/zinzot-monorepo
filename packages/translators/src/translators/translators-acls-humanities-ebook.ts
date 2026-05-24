// Translator: ACLS Humanities EBook
// Target: ^https?://www\.fulcrum\.org/
// TODO: Implement ACLS Humanities EBook translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-acls-humanities-ebook.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ACLS Humanities EBook',
      translatorType: 4,
      target: '^https?://www\.fulcrum\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-03 01:54:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
