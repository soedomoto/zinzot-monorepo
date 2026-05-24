// Translator: AMS Journals
// Target: ^https?://www\.ams\.org/journals/
// TODO: Implement AMS Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ams-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AMS Journals',
      translatorType: 4,
      target: '^https?://www\.ams\.org/journals/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-03 20:50:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
