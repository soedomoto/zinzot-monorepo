// Translator: dLibra
// Target: /.*dlibra/(doccontent|docmetadata|collectiondescription|results)|/dlibra/?
// TODO: Implement dLibra translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dlibra.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'dLibra',
      translatorType: 4,
      target: '/.*dlibra/(doccontent|docmetadata|collectiondescription|results)|/dlibra/?',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-21 04:23:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
