// Translator: Elsevier Health Journals
// Target: /action/doSearch\?|/article/[^/]+/(abstract|fulltext|references|images)
// TODO: Implement Elsevier Health Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-elsevier-health-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Elsevier Health Journals',
      translatorType: 4,
      target: '/action/doSearch\?|/article/[^/]+/(abstract|fulltext|references|images)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2021-11-24 23:10:20',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
