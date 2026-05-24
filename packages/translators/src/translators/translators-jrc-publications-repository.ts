// Translator: JRC Publications Repository
// Target: ^https?://(www\.)?publications\.jrc\.ec\.europa\.eu/repository/(handle/|simple-search\?|browse\?)
// TODO: Implement JRC Publications Repository translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-jrc-publications-repository.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'JRC Publications Repository',
      translatorType: 4,
      target: '^https?://(www\.)?publications\.jrc\.ec\.europa\.eu/repository/(handle/|simple-search\?|browse\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 15:24:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
