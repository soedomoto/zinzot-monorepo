// Translator: Washington Monthly
// Target: ^https?://(www\.)?washingtonmonthly\.com
// TODO: Implement Washington Monthly translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-washington-monthly.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Washington Monthly',
      translatorType: 4,
      target: '^https?://(www\.)?washingtonmonthly\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-10 22:51:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
