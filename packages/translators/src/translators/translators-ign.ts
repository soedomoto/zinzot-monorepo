// Translator: IGN
// Target: ^https?://(www\.)?ign\.com/articles/
// TODO: Implement IGN translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ign.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IGN',
      translatorType: 4,
      target: '^https?://(www\.)?ign\.com/articles/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-06-15 16:37:47',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
