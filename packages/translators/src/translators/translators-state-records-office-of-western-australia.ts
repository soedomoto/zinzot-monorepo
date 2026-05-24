// Translator: State Records Office of Western Australia
// Target: ^https://archive\.sro\.wa\.gov\.au/
// TODO: Implement State Records Office of Western Australia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-state-records-office-of-western-australia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'State Records Office of Western Australia',
      translatorType: 4,
      target: '^https://archive\.sro\.wa\.gov\.au/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-10-09 15:42:45',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
