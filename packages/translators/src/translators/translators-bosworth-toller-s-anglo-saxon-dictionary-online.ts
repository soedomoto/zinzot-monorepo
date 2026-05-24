// Translator: Bosworth Toller's Anglo-Saxon Dictionary Online
// Target: ^https://bosworthtoller\.com/
// TODO: Implement Bosworth Toller's Anglo-Saxon Dictionary Online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bosworth-toller-s-anglo-saxon-dictionary-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bosworth Toller\'s Anglo-Saxon Dictionary Online',
      translatorType: 4,
      target: '^https://bosworthtoller\.com/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-18 07:39:58',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
