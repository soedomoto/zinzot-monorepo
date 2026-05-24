// Translator: Lagen.nu
// Target: ^https?://lagen\.nu/
// TODO: Implement Lagen.nu translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-lagen-nu.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Lagen.nu',
      translatorType: 4,
      target: '^https?://lagen\.nu/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-03 20:33:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
