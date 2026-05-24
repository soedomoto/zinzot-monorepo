// Translator: Library Catalog (Voyager 7)
// Target: /vwebv/(holdingsInfo|search)
// TODO: Implement Library Catalog (Voyager 7) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-voyager-7.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Voyager 7)',
      translatorType: 4,
      target: '/vwebv/(holdingsInfo|search)',
      minVersion: '1.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-08-26 04:12:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
