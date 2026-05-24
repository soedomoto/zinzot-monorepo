// Translator: BOE
// Target: ^https?://([a-z]+\.)?boe\.es/
// TODO: Implement BOE translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-boe.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BOE',
      translatorType: 4,
      target: '^https?://([a-z]+\.)?boe\.es/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-26 17:07:40',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
