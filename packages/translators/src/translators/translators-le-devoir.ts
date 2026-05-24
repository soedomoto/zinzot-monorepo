// Translator: Le Devoir
// Target: ^https?://www\.ledevoir\.com
// TODO: Implement Le Devoir translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-le-devoir.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Le Devoir',
      translatorType: 4,
      target: '^https?://www\.ledevoir\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 15:26:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
