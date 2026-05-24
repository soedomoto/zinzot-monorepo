// Translator: COBISS
// Target: ^https?://plus\.cobiss\.net/cobiss
// TODO: Implement COBISS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cobiss.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'COBISS',
      translatorType: 4,
      target: '^https?://plus\.cobiss\.net/cobiss',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-17 18:57:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
