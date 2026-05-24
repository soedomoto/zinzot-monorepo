// Translator: Philosopher's Imprint
// Target: ^https?://quod\.lib\.umich\.edu/p/phimp
// TODO: Implement Philosopher's Imprint translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-philosopher-s-imprint.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Philosopher\'s Imprint',
      translatorType: 4,
      target: '^https?://quod\.lib\.umich\.edu/p/phimp',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-01 04:27:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
