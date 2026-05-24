// Translator: Frieze
// Target: ^https?://(www\.)?frieze\.com/
// TODO: Implement Frieze translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-frieze.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Frieze',
      translatorType: 4,
      target: '^https?://(www\.)?frieze\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-11 16:34:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
