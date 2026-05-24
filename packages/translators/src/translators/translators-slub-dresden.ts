// Translator: SLUB Dresden
// Target: ^https://katalog\.slub-dresden\.de/
// TODO: Implement SLUB Dresden translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-slub-dresden.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SLUB Dresden',
      translatorType: 4,
      target: '^https://katalog\.slub-dresden\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-29 00:22:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
