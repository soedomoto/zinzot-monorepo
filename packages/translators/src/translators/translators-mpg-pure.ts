// Translator: MPG PuRe
// Target: ^https?://pure\.mpg\.de/
// TODO: Implement MPG PuRe translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-mpg-pure.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'MPG PuRe',
      translatorType: 4,
      target: '^https?://pure\.mpg\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-07 20:00:26',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
