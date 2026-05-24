// Translator: NZZ.ch
// Target: ^https?://(www\.)?nzz\.ch/
// TODO: Implement NZZ.ch translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nzz-ch.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NZZ.ch',
      translatorType: 4,
      target: '^https?://(www\.)?nzz\.ch/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-04-05 17:23:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
