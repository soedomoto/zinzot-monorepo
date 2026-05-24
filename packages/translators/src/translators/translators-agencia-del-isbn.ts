// Translator: Agencia del ISBN
// Target: ^https?://www\.mcu\.es/webISBN
// TODO: Implement Agencia del ISBN translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-agencia-del-isbn.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Agencia del ISBN',
      translatorType: 4,
      target: '^https?://www\.mcu\.es/webISBN',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2015-06-10 11:33:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
