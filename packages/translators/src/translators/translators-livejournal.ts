// Translator: LiveJournal
// Target: ^https?://.*\.livejournal\.com/($|[0-9]+\.html)
// TODO: Implement LiveJournal translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-livejournal.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'LiveJournal',
      translatorType: 4,
      target: '^https?://.*\.livejournal\.com/($|[0-9]+\.html)',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-04 20:37:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
