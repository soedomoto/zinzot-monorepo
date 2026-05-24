// Translator: ARTnews
// Target: ^https?://(www\.)?artnews\.com
// TODO: Implement ARTnews translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-artnews.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ARTnews',
      translatorType: 4,
      target: '^https?://(www\.)?artnews\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-03-12 00:18:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
