// Translator: etatar.ru
// Target: ^https?://(www\.)?etatar\.ru/
// TODO: Implement etatar.ru translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-etatar-ru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'etatar.ru',
      translatorType: 4,
      target: '^https?://(www\.)?etatar\.ru/',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2011-09-13 10:20:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
