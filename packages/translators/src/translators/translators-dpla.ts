// Translator: DPLA
// Target: ^https?://dp\.la/
// TODO: Implement DPLA translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dpla.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DPLA',
      translatorType: 4,
      target: '^https?://dp\.la/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcv',
      lastUpdated: '2016-09-12 06:17:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
