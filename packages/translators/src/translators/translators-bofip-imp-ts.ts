// Translator: BOFiP-Impôts
// Target: ^https?://bofip\.impots\.gouv\.fr/bofip/
// TODO: Implement BOFiP-Impôts translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bofip-imp-ts.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BOFiP-Impôts',
      translatorType: 4,
      target: '^https?://bofip\.impots\.gouv\.fr/bofip/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsib',
      lastUpdated: '2017-01-01 14:53:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
