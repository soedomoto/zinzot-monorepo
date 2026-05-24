// Translator: Library Catalog (Dynix)
// Target: ipac\.jsp\?.*(uri=(link|full)=[0-9]|menu=search|term=)
// TODO: Implement Library Catalog (Dynix) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-dynix.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Dynix)',
      translatorType: 4,
      target: 'ipac\.jsp\?.*(uri=(link|full)=[0-9]|menu=search|term=)',
      minVersion: '2.1',
      maxVersion: '',
      priority: 260,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2014-08-26 03:59:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
