// Translator: National Archives of South Africa
// Target: ^https?://www\.national\.archsrch\.gov\.za
// TODO: Implement National Archives of South Africa translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-archives-of-south-africa.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Archives of South Africa',
      translatorType: 4,
      target: '^https?://www\.national\.archsrch\.gov\.za',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2014-03-12 22:00:51',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
