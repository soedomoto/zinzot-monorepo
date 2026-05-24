// Translator: eLibrary.ru
// Target: ^https?://(www\.)?elibrary\.ru/
// TODO: Implement eLibrary.ru translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-elibrary-ru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'eLibrary.ru',
      translatorType: 4,
      target: '^https?://(www\.)?elibrary\.ru/',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-07-14 15:27:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
