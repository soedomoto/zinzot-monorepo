// Translator: zotero.org
// Target: ^https?://[^/]*zotero\.org(:\d+)?/.+/(items|collections|library|publications|trash|search|item-list|item-details)(/|$)
// TODO: Implement zotero.org translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-zotero-org.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'zotero.org',
      translatorType: 4,
      target: '^https?://[^/]*zotero\.org(:\d+)?/.+/(items|collections|library|publications|trash|search|item-list|item-details)(/|$)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2021-07-18 22:33:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
