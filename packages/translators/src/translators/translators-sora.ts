// Translator: SORA
// Target: ^https?://sora\.unm\.edu/(node/|search/node/|advancedsearch\?)
// TODO: Implement SORA translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sora.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SORA',
      translatorType: 4,
      target: '^https?://sora\.unm\.edu/(node/|search/node/|advancedsearch\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2017-06-24 15:08:40',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
