// Translator: World Digital Library
// Target: ^https?://www\.wdl\.org/
// TODO: Implement World Digital Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-world-digital-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'World Digital Library',
      translatorType: 4,
      target: '^https?://www\.wdl\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-09 17:07:18',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
