// Translator: NCBI Nucleotide
// Target: ^https?://(www\.)?ncbi\.nlm\.nih\.gov/nuccore/
// TODO: Implement NCBI Nucleotide translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ncbi-nucleotide.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NCBI Nucleotide',
      translatorType: 4,
      target: '^https?://(www\.)?ncbi\.nlm\.nih\.gov/nuccore/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2021-06-07 11:25:19',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
