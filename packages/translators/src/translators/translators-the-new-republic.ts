// Translator: The New Republic
// Target: ^https?://(www\.)?newrepublic\.com/
// TODO: Implement The New Republic translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-new-republic.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The New Republic',
      translatorType: 4,
      target: '^https?://(www\.)?newrepublic\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-01 21:10:41',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
