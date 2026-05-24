// Translator: Handelszeitung
// Target: ^https?://((www\.)?(handelszeitung|bilanz|stocks)\.ch/.)
// TODO: Implement Handelszeitung translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-handelszeitung.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Handelszeitung',
      translatorType: 4,
      target: '^https?://((www\.)?(handelszeitung|bilanz|stocks)\.ch/.)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-10-31 18:41:26',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
