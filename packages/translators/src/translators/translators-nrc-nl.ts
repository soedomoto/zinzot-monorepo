// Translator: NRC.nl
// Target: ^https?://www\.nrc\.nl
// TODO: Implement NRC.nl translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nrc-nl.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NRC.nl',
      translatorType: 4,
      target: '^https?://www\.nrc\.nl',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-06-20 08:03:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
