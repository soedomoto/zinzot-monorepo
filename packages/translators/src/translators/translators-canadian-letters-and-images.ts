// Translator: Canadian Letters and Images
// Target: ^https?://(www\.)?canadianletters\.ca/
// TODO: Implement Canadian Letters and Images translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-canadian-letters-and-images.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Canadian Letters and Images',
      translatorType: 4,
      target: '^https?://(www\.)?canadianletters\.ca/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-09 19:45:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
