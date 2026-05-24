// Translator: magazines.russ.ru
// Target: ^https?://magazines\.russ\.ru/[a-zA-Z -_]+/[0-9]+/[0-9]+/
// TODO: Implement magazines.russ.ru translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-magazines-russ-ru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'magazines.russ.ru',
      translatorType: 4,
      target: '^https?://magazines\.russ\.ru/[a-zA-Z -_]+/[0-9]+/[0-9]+/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-12-31 10:22:19',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
