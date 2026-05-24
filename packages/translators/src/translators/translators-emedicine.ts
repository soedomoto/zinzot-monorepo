// Translator: eMedicine
// Target: ^https?://emedicine\.medscape\.com/article/
// TODO: Implement eMedicine translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-emedicine.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'eMedicine',
      translatorType: 4,
      target: '^https?://emedicine\.medscape\.com/article/',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2013-04-15 18:04:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
