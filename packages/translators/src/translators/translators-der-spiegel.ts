// Translator: Der Spiegel
// Target: ^https?://www\.spiegel\.de/
// TODO: Implement Der Spiegel translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-der-spiegel.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Der Spiegel',
      translatorType: 4,
      target: '^https?://www\.spiegel\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-05 17:55:21',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
