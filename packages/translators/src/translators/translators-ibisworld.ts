// Translator: IBISWorld
// Target: ^https?://clients\d\.ibisworld\.com/(reports|search)
// TODO: Implement IBISWorld translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ibisworld.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IBISWorld',
      translatorType: 4,
      target: '^https?://clients\d\.ibisworld\.com/(reports|search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gc',
      lastUpdated: '2014-03-12 04:43:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
