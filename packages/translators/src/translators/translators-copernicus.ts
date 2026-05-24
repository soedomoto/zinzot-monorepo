// Translator: Copernicus
// Target: ^https?://[^./]+\.copernicus\.org/
// TODO: Implement Copernicus translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-copernicus.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Copernicus',
      translatorType: 4,
      target: '^https?://[^./]+\.copernicus\.org/',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-01-25 15:59:41',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
