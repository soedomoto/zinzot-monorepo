// Translator: Le Maitron
// Target: ^https?://maitron\.fr/
// TODO: Implement Le Maitron translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-le-maitron.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Le Maitron',
      translatorType: 4,
      target: '^https?://maitron\.fr/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-09-24 22:15:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
