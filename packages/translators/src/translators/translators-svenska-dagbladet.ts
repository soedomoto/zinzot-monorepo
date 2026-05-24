// Translator: Svenska Dagbladet
// Target: ^https://www\.svd\.se/
// TODO: Implement Svenska Dagbladet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-svenska-dagbladet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Svenska Dagbladet',
      translatorType: 4,
      target: '^https://www\.svd\.se/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-08-31 11:59:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
