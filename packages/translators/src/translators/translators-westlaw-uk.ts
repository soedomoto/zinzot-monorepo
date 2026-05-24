// Translator: WestLaw UK
// Target: ^https://uk\.westlaw\.com/Document/
// TODO: Implement WestLaw UK translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-westlaw-uk.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'WestLaw UK',
      translatorType: 4,
      target: '^https://uk\.westlaw\.com/Document/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-02-13 15:15:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
