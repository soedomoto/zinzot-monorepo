// Translator: Elicit
// Target: ^https://elicit\.org/
// TODO: Implement Elicit translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-elicit.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Elicit',
      translatorType: 4,
      target: '^https://elicit\.org/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-04-28 21:18:17',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
