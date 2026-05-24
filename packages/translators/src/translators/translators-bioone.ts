// Translator: BioOne
// Target: ^https?://[^/]*www\.bioone\.org[^/]*/s
// TODO: Implement BioOne translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bioone.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BioOne',
      translatorType: 4,
      target: '^https?://[^/]*www\.bioone\.org[^/]*/s',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-04-03 16:38:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
