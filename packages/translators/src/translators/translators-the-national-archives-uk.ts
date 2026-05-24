// Translator: The National Archives (UK)
// Target: ^https?://discovery\.nationalarchives\.gov\.uk/
// TODO: Implement The National Archives (UK) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-national-archives-uk.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The National Archives (UK)',
      translatorType: 4,
      target: '^https?://discovery\.nationalarchives\.gov\.uk/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-12 20:12:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
