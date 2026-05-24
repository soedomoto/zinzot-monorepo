// Translator: BBC Genome
// Target: ^https?://genome\.ch\.bbc\.co\.uk/
// TODO: Implement BBC Genome translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bbc-genome.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BBC Genome',
      translatorType: 4,
      target: '^https?://genome\.ch\.bbc\.co\.uk/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-09-04 22:38:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
