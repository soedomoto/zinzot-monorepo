// Translator: Amazon
// Target: ^https?://((www\.)|(smile\.))?amazon
// TODO: Implement Amazon translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-amazon.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Amazon',
      translatorType: 4,
      target: '^https?://((www\.)|(smile\.))?amazon',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-20 15:45:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
