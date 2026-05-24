// Translator: Figshare
// Target: ^https?://figshare\.com/
// TODO: Implement Figshare translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-figshare.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Figshare',
      translatorType: 4,
      target: '^https?://figshare\.com/',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2017-06-20 03:57:47',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
