// Translator: Calisphere
// Target: ^https://calisphere\.org/(item/|search/)
// TODO: Implement Calisphere translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-calisphere.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Calisphere',
      translatorType: 4,
      target: '^https://calisphere\.org/(item/|search/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-07 21:01:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
