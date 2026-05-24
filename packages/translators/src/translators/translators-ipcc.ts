// Translator: IPCC
// Target: ^https?://www\.ipcc\.ch/report/
// TODO: Implement IPCC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ipcc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IPCC',
      translatorType: 4,
      target: '^https?://www\.ipcc\.ch/report/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-09-18 01:10:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
