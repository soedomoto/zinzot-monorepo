// Translator: HUDOC
// Target: ^https?://hudoc\.echr\.coe\.int
// TODO: Implement HUDOC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-hudoc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'HUDOC',
      translatorType: 4,
      target: '^https?://hudoc\.echr\.coe\.int',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-19 21:19:21',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
