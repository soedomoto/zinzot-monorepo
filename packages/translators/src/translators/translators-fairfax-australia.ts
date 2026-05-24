// Translator: Fairfax Australia
// Target: ^https?://www\.(theage|smh|brisbanetimes|watoday)\.com\.au/
// TODO: Implement Fairfax Australia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-fairfax-australia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Fairfax Australia',
      translatorType: 4,
      target: '^https?://www\.(theage|smh|brisbanetimes|watoday)\.com\.au/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-07 11:47:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
