// Translator: National Bureau of Economic Research
// Target: ^https?://(papers\.|www2?\.)?nber\.org/(system/files/)?(papers|s|new|custom|books-and-chapters|chapters)
// TODO: Implement National Bureau of Economic Research translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-bureau-of-economic-research.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Bureau of Economic Research',
      translatorType: 4,
      target: '^https?://(papers\.|www2?\.)?nber\.org/(system/files/)?(papers|s|new|custom|books-and-chapters|chapters)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-04-04 18:13:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
