// Translator: Blogger
// Target: \.blogspot\.com
// TODO: Implement Blogger translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-blogger.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Blogger',
      translatorType: 4,
      target: '\.blogspot\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-05 23:14:05',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
