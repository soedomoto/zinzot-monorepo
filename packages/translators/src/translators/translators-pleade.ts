// Translator: Pleade
// Target: (list-results|results|ead)\.html\?.*(base=ead|mode=|id=)
// TODO: Implement Pleade translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pleade.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Pleade',
      translatorType: 4,
      target: '(list-results|results|ead)\.html\?.*(base=ead|mode=|id=)',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2015-01-30 15:32:05',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
