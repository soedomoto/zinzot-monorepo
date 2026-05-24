// Translator: PEP Web
// Target: ^https?://www\.pep-web\.org
// TODO: Implement PEP Web translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pep-web.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PEP Web',
      translatorType: 4,
      target: '^https?://www\.pep-web\.org',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2015-03-20 06:07:35',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
