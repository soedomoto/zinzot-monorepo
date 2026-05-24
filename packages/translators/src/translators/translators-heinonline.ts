// Translator: HeinOnline
// Target: ^https?://(www\.)?heinonline\.org/HOL/(LuceneSearch|Page|IFLPMetaData|AuthorProfile)\?
// TODO: Implement HeinOnline translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-heinonline.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'HeinOnline',
      translatorType: 4,
      target: '^https?://(www\.)?heinonline\.org/HOL/(LuceneSearch|Page|IFLPMetaData|AuthorProfile)\?',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-08-23 02:00:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
