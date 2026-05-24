// Translator: APN.ru
// Target: ^https?://www\.apn\.ru/
// TODO: Implement APN.ru translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-apn-ru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'APN.ru',
      translatorType: 4,
      target: '^https?://www\.apn\.ru/',
      minVersion: '2.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2012-03-03 23:38:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
