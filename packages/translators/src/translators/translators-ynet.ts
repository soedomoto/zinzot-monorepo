// Translator: Ynet
// Target: ^https?://www\.ynet(\.co\.il|news\.com)/
// TODO: Implement Ynet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ynet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Ynet',
      translatorType: 4,
      target: '^https?://www\.ynet(\.co\.il|news\.com)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-03 20:46:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
