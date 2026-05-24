// Translator: Cambridge Engage Preprints
// Target: /engage/[^/]+/(article-details/|search-dashboard\?)
// TODO: Implement Cambridge Engage Preprints translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cambridge-engage-preprints.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Cambridge Engage Preprints',
      translatorType: 4,
      target: '/engage/[^/]+/(article-details/|search-dashboard\?)',
      minVersion: '5.0',
      maxVersion: '',
      priority: 200,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-10-23 08:35:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
