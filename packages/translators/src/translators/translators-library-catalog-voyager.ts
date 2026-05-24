// Translator: Library Catalog (Voyager)
// Target: Pwebrecon\.cgi
// TODO: Implement Library Catalog (Voyager) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-voyager.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Voyager)',
      translatorType: 4,
      target: 'Pwebrecon\.cgi',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:30:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
