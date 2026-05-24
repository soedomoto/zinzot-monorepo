// Translator: Perceiving Systems
// Target: ^https?://ps\.is\.tuebingen\.mpg\.de/publications
// TODO: Implement Perceiving Systems translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-perceiving-systems.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Perceiving Systems',
      translatorType: 4,
      target: '^https?://ps\.is\.tuebingen\.mpg\.de/publications',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-09 04:00:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
