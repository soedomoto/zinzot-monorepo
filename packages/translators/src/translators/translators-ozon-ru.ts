// Translator: OZON.ru
// Target: ^https?://www\.ozon\.ru/(context/detail/id/|\?context=search)
// TODO: Implement OZON.ru translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ozon-ru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OZON.ru',
      translatorType: 4,
      target: '^https?://www\.ozon\.ru/(context/detail/id/|\?context=search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-04 20:51:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
