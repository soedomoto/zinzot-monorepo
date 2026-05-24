// Translator: Library Catalog (InnoPAC)
// Target: (search~|/search\?|(a|X|t|Y|w)\?|\?(searchtype|searchscope)|frameset&FF|record=[bi]?[0-9]+(~S[0-9])?|/search/q\?)
// TODO: Implement Library Catalog (InnoPAC) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-innopac.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (InnoPAC)',
      translatorType: 4,
      target: '(search~|/search\?|(a|X|t|Y|w)\?|\?(searchtype|searchscope)|frameset&FF|record=[bi]?[0-9]+(~S[0-9])?|/search/q\?)',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-04 21:15:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
