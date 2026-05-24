// Translator: Tatpressa.ru
// Target: ^https?://(www\.)?tatpressa\.ru/
// TODO: Implement Tatpressa.ru translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-tatpressa-ru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Tatpressa.ru',
      translatorType: 4,
      target: '^https?://(www\.)?tatpressa\.ru/',
      minVersion: '2.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 16:04:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
