// Translator: Google Patents
// Target: ^https?://(www\.)?patents\.google\.com/
// TODO: Implement Google Patents translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-google-patents.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Google Patents',
      translatorType: 4,
      target: '^https?://(www\.)?patents\.google\.com/',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-05 17:15:19',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
