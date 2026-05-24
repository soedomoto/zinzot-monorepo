// Translator: National Library of Belarus
// Target: ^https?://www\.nlb\.by/portal/page/portal/index/resources/(basicsearch|expandedsearch|anothersearch|authoritet|newdoc|top100)
// TODO: Implement National Library of Belarus translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-library-of-belarus.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Library of Belarus',
      translatorType: 4,
      target: '^https?://www\.nlb\.by/portal/page/portal/index/resources/(basicsearch|expandedsearch|anothersearch|authoritet|newdoc|top100)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 15:28:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
