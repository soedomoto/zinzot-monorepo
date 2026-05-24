// Translator: Cairn.info
// Target: ^https?://www\.cairn\.info/
// TODO: Implement Cairn.info translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cairn-info.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Cairn.info',
      translatorType: 4,
      target: '^https?://www\.cairn\.info/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-10-23 08:08:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
