// Translator: Ariana News
// Target: ^https://ariananews\.af/
// TODO: Implement Ariana News translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ariana-news.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Ariana News',
      translatorType: 4,
      target: '^https://ariananews\.af/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-16 15:20:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
