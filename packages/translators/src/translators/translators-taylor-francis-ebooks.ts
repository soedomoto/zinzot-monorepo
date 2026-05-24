// Translator: Taylor & Francis eBooks
// Target: ^https?://(www\.)?taylorfrancis\.com/(books|chapters|search)
// TODO: Implement Taylor & Francis eBooks translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-taylor-francis-ebooks.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Taylor & Francis eBooks',
      translatorType: 4,
      target: '^https?://(www\.)?taylorfrancis\.com/(books|chapters|search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-02-27 13:57:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
