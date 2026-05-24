// Translator: Matbugat.ru
// Target: ^https?://(www\.)?matbugat\.ru/
// TODO: Implement Matbugat.ru translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-matbugat-ru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Matbugat.ru',
      translatorType: 4,
      target: '^https?://(www\.)?matbugat\.ru/',
      minVersion: '2.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 16:03:35',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
