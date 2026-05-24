// Translator: BOCC
// Target: ^https?://[^/]*bocc[^/]*/(_listas|_esp)
// TODO: Implement BOCC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bocc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BOCC',
      translatorType: 4,
      target: '^https?://[^/]*bocc[^/]*/(_listas|_esp)',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2014-04-04 10:08:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
