// Translator: Oxford Dictionaries Premium
// Target: ^https?://premium\.oxforddictionaries\.com/(translate|definition)/
// TODO: Implement Oxford Dictionaries Premium translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-oxford-dictionaries-premium.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Oxford Dictionaries Premium',
      translatorType: 4,
      target: '^https?://premium\.oxforddictionaries\.com/(translate|definition)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-13 22:07:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
