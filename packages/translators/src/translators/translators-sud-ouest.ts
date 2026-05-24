// Translator: Sud Ouest
// Target: ^https?://www\.sudouest\.fr/
// TODO: Implement Sud Ouest translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sud-ouest.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Sud Ouest',
      translatorType: 4,
      target: '^https?://www\.sudouest\.fr/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-06 17:27:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
