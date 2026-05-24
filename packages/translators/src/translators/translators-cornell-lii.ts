// Translator: Cornell LII
// Target: ^https?://www\.law\.cornell\.edu/supct/.+
// TODO: Implement Cornell LII translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cornell-lii.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Cornell LII',
      translatorType: 4,
      target: '^https?://www\.law\.cornell\.edu/supct/.+',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2013-02-09 12:09:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
