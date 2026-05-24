// Translator: Gene Ontology
// Target: ^https?://(amigo\.)?geneontology\.org/
// TODO: Implement Gene Ontology translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-gene-ontology.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Gene Ontology',
      translatorType: 4,
      target: '^https?://(amigo\.)?geneontology\.org/',
      minVersion: '2.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-18 21:31:51',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
