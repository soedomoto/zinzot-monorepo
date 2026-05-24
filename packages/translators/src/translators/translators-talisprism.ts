// Translator: TalisPrism
// Target: /TalisPrism/(browseResults|doSearch|doOpenURLSearch)
// TODO: Implement TalisPrism translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-talisprism.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'TalisPrism',
      translatorType: 4,
      target: '/TalisPrism/(browseResults|doSearch|doOpenURLSearch)',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2014-02-27 23:48:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
