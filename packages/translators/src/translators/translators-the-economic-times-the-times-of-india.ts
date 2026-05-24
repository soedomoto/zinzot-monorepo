// Translator: The Economic Times - The Times of India
// Target: ^https?://(economictimes|timesofindia)\.indiatimes\.com
// TODO: Implement The Economic Times - The Times of India translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-economic-times-the-times-of-india.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Economic Times - The Times of India',
      translatorType: 4,
      target: '^https?://(economictimes|timesofindia)\.indiatimes\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-12 19:47:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
