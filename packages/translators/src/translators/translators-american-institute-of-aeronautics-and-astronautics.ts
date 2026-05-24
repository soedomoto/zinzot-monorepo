// Translator: American Institute of Aeronautics and Astronautics
// Target: ^https?://arc\.aiaa\.org/
// TODO: Implement American Institute of Aeronautics and Astronautics translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-american-institute-of-aeronautics-and-astronautics.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'American Institute of Aeronautics and Astronautics',
      translatorType: 4,
      target: '^https?://arc\.aiaa\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcv',
      lastUpdated: '2013-12-12 03:22:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
