// Translator: Wikidata
// Target: ^https?://(www\.)?wikidata\.org/wiki/Q
// TODO: Implement Wikidata translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wikidata.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wikidata',
      translatorType: 4,
      target: '^https?://(www\.)?wikidata\.org/wiki/Q',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-19 09:56:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
