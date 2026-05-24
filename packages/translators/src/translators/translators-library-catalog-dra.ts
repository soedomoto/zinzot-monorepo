// Translator: Library Catalog (DRA)
// Target: /web2/tramp2\.exe/(see\_record/|authority\_hits/|do_keyword_search|form/|goto/.*\?.*screen=(MARC)?Record\.html)
// TODO: Implement Library Catalog (DRA) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-dra.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (DRA)',
      translatorType: 4,
      target: '/web2/tramp2\.exe/(see\_record/|authority\_hits/|do_keyword_search|form/|goto/.*\?.*screen=(MARC)?Record\.html)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 260,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2016-12-04 12:47:41',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
