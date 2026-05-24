// Translator: jurion
// Target: ^https?://www\.recht\.jurion\.de/
// TODO: Implement jurion translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-jurion.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'jurion',
      translatorType: 4,
      target: '^https?://www\.recht\.jurion\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-30 20:15:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
