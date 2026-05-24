// Translator: Polygon
// Target: ^https?://(www\.)?(polygon|heroesneverdie|riftherald|theflyingcourier)\.com
// TODO: Implement Polygon translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-polygon.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Polygon',
      translatorType: 4,
      target: '^https?://(www\.)?(polygon|heroesneverdie|riftherald|theflyingcourier)\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-05-26 20:04:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
