// Translator: NRC Research Press
// Target: ^https?://www\.nrcresearchpress\.com
// TODO: Implement NRC Research Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nrc-research-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NRC Research Press',
      translatorType: 4,
      target: '^https?://www\.nrcresearchpress\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcbv',
      lastUpdated: '2016-05-24 13:18:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
