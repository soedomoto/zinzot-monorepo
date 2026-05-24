// Translator: Primo 2018
// Target: (/primo-explore/|/discovery/(search|fulldisplay|jsearch|dbsearch|npsearch|openurl|jfulldisplay|dbfulldisplay|npfulldisplay|collectionDiscovery)\?)
// TODO: Implement Primo 2018 translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-primo-2018.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Primo 2018',
      translatorType: 4,
      target: '(/primo-explore/|/discovery/(search|fulldisplay|jsearch|dbsearch|npsearch|openurl|jfulldisplay|dbfulldisplay|npfulldisplay|collectionDiscovery)\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-09-26 14:40:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
