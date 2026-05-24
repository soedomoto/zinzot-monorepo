// Translator: ATS International Journal
// Target: ^https?://(www\.)?atsinternationaljournal\.com/
// TODO: Implement ATS International Journal translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ats-international-journal.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ATS International Journal',
      translatorType: 4,
      target: '^https?://(www\.)?atsinternationaljournal\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-09-10 19:50:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
