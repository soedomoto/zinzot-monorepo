// Translator: mEDRA
// Target: ^https?://www\.medra\.org/servlet/view\?
// TODO: Implement mEDRA translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-medra.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'mEDRA',
      translatorType: 12,
      target: '^https?://www\.medra\.org/servlet/view\?',
      minVersion: '3.0',
      maxVersion: '',
      priority: 105,
      inRepository: true,
      browserSupport: 'g',
      lastUpdated: '2014-05-26 03:50:55',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
