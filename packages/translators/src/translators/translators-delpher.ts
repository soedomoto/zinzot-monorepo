// Translator: Delpher
// Target: ^https?://[^\/]+\.delpher\.nl
// TODO: Implement Delpher translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-delpher.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Delpher',
      translatorType: 4,
      target: '^https?://[^\/]+\.delpher\.nl',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-01-20 14:35:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
