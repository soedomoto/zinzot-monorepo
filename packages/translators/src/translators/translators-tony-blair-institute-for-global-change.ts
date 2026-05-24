// Translator: Tony Blair Institute for Global Change
// Target: ^https://institute\.global/
// TODO: Implement Tony Blair Institute for Global Change translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-tony-blair-institute-for-global-change.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Tony Blair Institute for Global Change',
      translatorType: 4,
      target: '^https://institute\.global/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-02 22:24:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
