// Translator: Library Catalog (Pika)
// Target: /Record/\.[a-z]|/GroupedWork/[a-z0-9-]+|/Union/Search\?
// TODO: Implement Library Catalog (Pika) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-pika.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Pika)',
      translatorType: 4,
      target: '/Record/\.[a-z]|/GroupedWork/[a-z0-9-]+|/Union/Search\?',
      minVersion: '3.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-17 23:44:24',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
