// Translator: PubMed Central
// Target: ^https://(www\.)?(pmc\.ncbi\.nlm\.nih\.gov/|ncbi\.nlm\.nih\.gov/pmc)
// TODO: Implement PubMed Central translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pubmed-central.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PubMed Central',
      translatorType: 4,
      target: '^https://(www\.)?(pmc\.ncbi\.nlm\.nih\.gov/|ncbi\.nlm\.nih\.gov/pmc)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-11-21 21:10:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
