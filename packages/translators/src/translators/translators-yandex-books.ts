// Translator: Yandex Books
// Target: ^https://books\.yandex\.ru/
// TODO: Implement Yandex Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-yandex-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Yandex Books',
      translatorType: 4,
      target: '^https://books\.yandex\.ru/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-05-06 18:45:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
