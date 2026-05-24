// Translator: Databrary
// Target: ^https?://nyu\.databrary\.org/(volume|search)
// TODO: Implement Databrary translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-databrary.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Databrary',
      translatorType: 4,
      target: '^https?://nyu\.databrary\.org/(volume|search)',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-04-19 16:49:05',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
