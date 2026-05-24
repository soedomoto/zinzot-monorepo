// Translator: Wikidata QuickStatements
// Target: txt
// TODO: Implement Wikidata QuickStatements translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wikidata-quickstatements.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wikidata QuickStatements',
      translatorType: 2,
      target: 'txt',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-08 23:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
