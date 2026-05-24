// Translator: Library Catalog (Polaris)
// Target: /polaris/search/(searchresults|title)\.aspx\?
// TODO: Implement Library Catalog (Polaris) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-polaris.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Polaris)',
      translatorType: 4,
      target: '/polaris/search/(searchresults|title)\.aspx\?',
      minVersion: '3.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2015-02-19 04:55:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
