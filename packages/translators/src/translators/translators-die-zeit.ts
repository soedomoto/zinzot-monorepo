// Translator: Die Zeit
// Target: ^https?://www\.zeit\.de/
// TODO: Implement Die Zeit translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-die-zeit.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Die Zeit',
      translatorType: 4,
      target: '^https?://www\.zeit\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-11-25 19:35:23',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
