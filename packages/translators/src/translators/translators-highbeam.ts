// Translator: HighBeam
// Target: ^https?://www\.highbeam\.com/
// TODO: Implement HighBeam translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-highbeam.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'HighBeam',
      translatorType: 4,
      target: '^https?://www\.highbeam\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-07 09:32:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
