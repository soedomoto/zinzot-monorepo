// Translator: DigiZeitschriften
// Target: ^https?://www\.digizeitschriften\.de/((en/)?dms/|index\.php\?id=27[24])
// TODO: Implement DigiZeitschriften translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-digizeitschriften.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DigiZeitschriften',
      translatorType: 4,
      target: '^https?://www\.digizeitschriften\.de/((en/)?dms/|index\.php\?id=27[24])',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2018-01-07 09:28:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
