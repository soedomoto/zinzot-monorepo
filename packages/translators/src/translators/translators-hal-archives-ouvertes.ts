// Translator: HAL Archives Ouvertes
// Target: ^https://(hal\.archives-ouvertes\.fr|hal\.science)\b
// TODO: Implement HAL Archives Ouvertes translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-hal-archives-ouvertes.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'HAL Archives Ouvertes',
      translatorType: 4,
      target: '^https://(hal\.archives-ouvertes\.fr|hal\.science)\b',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-07-12 08:47:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
