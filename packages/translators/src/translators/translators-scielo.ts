// Translator: SciELO
// Target: ^https?://(www\.)?(socialscience\.|proceedings\.|biodiversidade\.|caribbean\.|comciencia\.|inovacao\.|search\.)?(scielo|scielosp)\.
// TODO: Implement SciELO translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-scielo.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SciELO',
      translatorType: 4,
      target: '^https?://(www\.)?(socialscience\.|proceedings\.|biodiversidade\.|caribbean\.|comciencia\.|inovacao\.|search\.)?(scielo|scielosp)\.',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-12-06 18:35:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
