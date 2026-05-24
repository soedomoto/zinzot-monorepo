// Translator: Archives Canada
// Target: ^https?://(www\.)?archivescanada\.ca
// TODO: Implement Archives Canada translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-archives-canada.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Archives Canada',
      translatorType: 4,
      target: '^https?://(www\.)?archivescanada\.ca',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2019-06-13 23:00:25',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
