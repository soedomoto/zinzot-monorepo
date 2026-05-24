// Translator: Archeion
// Target: ^https?://www\.(archeion|memorybc|albertaonrecord)\.ca
// TODO: Implement Archeion translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-archeion.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Archeion',
      translatorType: 4,
      target: '^https?://www\.(archeion|memorybc|albertaonrecord)\.ca',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-03-05 07:08:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
