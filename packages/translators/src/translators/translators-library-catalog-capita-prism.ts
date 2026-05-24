// Translator: Library Catalog (Capita Prism)
// Target: /items(/\d+|\?query=)
// TODO: Implement Library Catalog (Capita Prism) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-capita-prism.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Capita Prism)',
      translatorType: 4,
      target: '/items(/\d+|\?query=)',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 260,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-07-02 21:37:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
