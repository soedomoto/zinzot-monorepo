// Translator: TV by the Numbers
// Target: ^https?://tvbythenumbers\.zap2it\.com/
// TODO: Implement TV by the Numbers translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-tv-by-the-numbers.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'TV by the Numbers',
      translatorType: 4,
      target: '^https?://tvbythenumbers\.zap2it\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-04-07 20:02:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
