// Translator: ARTstor
// Target: ^https?://library\.artstor\.org/
// TODO: Implement ARTstor translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-artstor.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ARTstor',
      translatorType: 4,
      target: '^https?://library\.artstor\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-23 05:46:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
