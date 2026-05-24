// Translator: taz.de
// Target: ^https?://(www\.)?taz\.de
// TODO: Implement taz.de translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-taz-de.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'taz.de',
      translatorType: 4,
      target: '^https?://(www\.)?taz\.de',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-10 16:55:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
