// Translator: Library Catalog (Aquabrowser)
// Target: /fullrecordinnerframe\.ashx\?.+id=|/result\.ashx\?
// TODO: Implement Library Catalog (Aquabrowser) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-aquabrowser.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Aquabrowser)',
      translatorType: 4,
      target: '/fullrecordinnerframe\.ashx\?.+id=|/result\.ashx\?',
      minVersion: '3.0',
      maxVersion: '',
      priority: 270,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2014-08-26 03:51:35',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
