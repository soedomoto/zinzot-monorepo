// Translator: Womennews
// Target: ^https?://www\.womennews\.co\.kr
// TODO: Implement Womennews translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-womennews.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Womennews',
      translatorType: 4,
      target: '^https?://www\.womennews\.co\.kr',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 16:47:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
