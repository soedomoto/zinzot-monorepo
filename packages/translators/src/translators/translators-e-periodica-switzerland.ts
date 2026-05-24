// Translator: E-periodica Switzerland
// Target: ^https?://(www|news?)\.e-periodica\.ch
// TODO: Implement E-periodica Switzerland translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-e-periodica-switzerland.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'E-periodica Switzerland',
      translatorType: 4,
      target: '^https?://(www|news?)\.e-periodica\.ch',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-15 20:15:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
