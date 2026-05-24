// Translator: NASA ADS
// Target: ^https://ui\.adsabs\.harvard\.edu/(search|abs)/
// TODO: Implement NASA ADS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nasa-ads.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NASA ADS',
      translatorType: 4,
      target: '^https://ui\.adsabs\.harvard\.edu/(search|abs)/',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-04-29 03:15:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
