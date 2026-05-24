// Translator: The Free Dictionary
// Target: ^https?://(.*\.)?thefreedictionary\.com/\w+$
// TODO: Implement The Free Dictionary translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-free-dictionary.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Free Dictionary',
      translatorType: 4,
      target: '^https?://(.*\.)?thefreedictionary\.com/\w+$',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2017-07-10 15:21:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
