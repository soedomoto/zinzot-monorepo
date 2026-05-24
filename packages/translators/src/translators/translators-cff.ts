// Translator: CFF
// Target: cff
// TODO: Implement CFF translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cff.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CFF',
      translatorType: 2,
      target: 'cff',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-05-04 13:21:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
