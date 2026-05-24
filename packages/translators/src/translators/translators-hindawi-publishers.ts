// Translator: Hindawi Publishers
// Target: ^https?://www\.hindawi\.com/(journals|search)/
// TODO: Implement Hindawi Publishers translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-hindawi-publishers.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Hindawi Publishers',
      translatorType: 4,
      target: '^https?://www\.hindawi\.com/(journals|search)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2021-03-07 03:48:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
