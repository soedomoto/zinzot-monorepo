// Translator: feb-web.ru
// Target: ^https?://(www\.)?feb-web\.ru/.*cmd=2
// TODO: Implement feb-web.ru translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-feb-web-ru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'feb-web.ru',
      translatorType: 4,
      target: '^https?://(www\.)?feb-web\.ru/.*cmd=2',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 16:09:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
