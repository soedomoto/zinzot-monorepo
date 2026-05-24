// Translator: Victoria & Albert Museum
// Target: ^https?://collections\.vam\.ac\.uk
// TODO: Implement Victoria & Albert Museum translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-victoria-albert-museum.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Victoria & Albert Museum',
      translatorType: 4,
      target: '^https?://collections\.vam\.ac\.uk',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-04-29 19:15:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
