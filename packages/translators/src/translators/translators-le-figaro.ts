// Translator: Le Figaro
// Target: ^https?://www\.lefigaro\.fr/
// TODO: Implement Le Figaro translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-le-figaro.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Le Figaro',
      translatorType: 4,
      target: '^https?://www\.lefigaro\.fr/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-05-29 22:56:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
