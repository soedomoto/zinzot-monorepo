// Translator: MCV
// Target: ^https?://(www\.)?mcvuk\.com
// TODO: Implement MCV translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-mcv.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'MCV',
      translatorType: 4,
      target: '^https?://(www\.)?mcvuk\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-12 00:34:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
