// Translator: Papers Past
// Target: ^https?://(www\.)?paperspast\.natlib\.govt\.nz/
// TODO: Implement Papers Past translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-papers-past.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Papers Past',
      translatorType: 4,
      target: '^https?://(www\.)?paperspast\.natlib\.govt\.nz/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-12 17:17:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
