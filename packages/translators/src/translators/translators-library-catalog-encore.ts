// Translator: Library Catalog (Encore)
// Target: /iii/encore/(record|search)
// TODO: Implement Library Catalog (Encore) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-encore.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Encore)',
      translatorType: 4,
      target: '/iii/encore/(record|search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 270,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-11-25 15:51:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
