// Translator: Cornell University Press
// Target: ^https?://www\.cornellpress\.cornell\.edu/
// TODO: Implement Cornell University Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cornell-university-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Cornell University Press',
      translatorType: 4,
      target: '^https?://www\.cornellpress\.cornell\.edu/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-10 11:32:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
