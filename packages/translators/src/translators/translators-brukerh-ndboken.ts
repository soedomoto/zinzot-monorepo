// Translator: Brukerhåndboken
// Target: https://brukerhandboken\.miraheze\.org/
// TODO: Implement Brukerhåndboken translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-brukerh-ndboken.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Brukerhåndboken',
      translatorType: 4,
      target: 'https://brukerhandboken\.miraheze\.org/',
      minVersion: '5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-06-27 16:03:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
