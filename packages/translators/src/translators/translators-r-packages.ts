// Translator: R-Packages
// Target: (cran\..+|cloud\.r-project\.org|/CRAN)/web/packages/
// TODO: Implement R-Packages translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-r-packages.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'R-Packages',
      translatorType: 4,
      target: '(cran\..+|cloud\.r-project\.org|/CRAN)/web/packages/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 150,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-11 17:26:25',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
