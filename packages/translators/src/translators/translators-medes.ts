// Translator: medes
// Target: ^https?://(www\.)?medes\.com/
// TODO: Implement medes translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-medes.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'medes',
      translatorType: 4,
      target: '^https?://(www\.)?medes\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-12-27 13:01:58',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
