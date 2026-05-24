// Translator: Columbia University Press
// Target: ^https?://(www\.)?cup\.columbia\.edu/
// TODO: Implement Columbia University Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-columbia-university-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Columbia University Press',
      translatorType: 4,
      target: '^https?://(www\.)?cup\.columbia\.edu/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-10 11:35:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
