// Translator: Fatcat
// Target: ^https://fatcat\.wiki/
// TODO: Implement Fatcat translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-fatcat.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Fatcat',
      translatorType: 4,
      target: '^https://fatcat\.wiki/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-18 23:05:26',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
