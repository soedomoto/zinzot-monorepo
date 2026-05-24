// Translator: MIDAS Journals
// Target: ^https?://(www\.)?(insight-journal|midasjournal|vtkjournal)\.org/
// TODO: Implement MIDAS Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-midas-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'MIDAS Journals',
      translatorType: 4,
      target: '^https?://(www\.)?(insight-journal|midasjournal|vtkjournal)\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-04-16 11:27:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
