// Translator: Library Catalog (Mango)
// Target: \.catalog\.fcla\.edu/.+\.jsp\?
// TODO: Implement Library Catalog (Mango) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-mango.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Mango)',
      translatorType: 4,
      target: '\.catalog\.fcla\.edu/.+\.jsp\?',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 200,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2012-09-24 12:32:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
