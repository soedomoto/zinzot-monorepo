// Translator: NewsBank
// Target: ^https?://infoweb\.newsbank\.com/
// TODO: Implement NewsBank translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-newsbank.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NewsBank',
      translatorType: 4,
      target: '^https?://infoweb\.newsbank\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-12 02:50:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
