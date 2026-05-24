// Translator: Library Catalog (Quolto)
// Target: /record/-/record/|results/-/results|^https?://(www\.)?(mokka\.hu/|odrportal\.hu/).+results
// TODO: Implement Library Catalog (Quolto) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-quolto.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Quolto)',
      translatorType: 4,
      target: '/record/-/record/|results/-/results|^https?://(www\.)?(mokka\.hu/|odrportal\.hu/).+results',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-11-12 03:27:27',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
