// Translator: The Microfinance Gateway
// Target: ^https?://(www\.)?microfinancegateway\.org/
// TODO: Implement The Microfinance Gateway translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-microfinance-gateway.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Microfinance Gateway',
      translatorType: 4,
      target: '^https?://(www\.)?microfinancegateway\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-10 15:27:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
