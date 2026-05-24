// Translator: National Library of Norway
// Target: ^https?://(www\.)?nb\.no/
// TODO: Implement National Library of Norway translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-library-of-norway.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Library of Norway',
      translatorType: 4,
      target: '^https?://(www\.)?nb\.no/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-14 15:58:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
