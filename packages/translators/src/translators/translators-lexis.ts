// Translator: Lexis+
// Target: ^https?://plus\.lexis\..*/
// TODO: Implement Lexis+ translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-lexis.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Lexis+',
      translatorType: 4,
      target: '^https?://plus\.lexis\..*/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-05-26 04:11:53',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
