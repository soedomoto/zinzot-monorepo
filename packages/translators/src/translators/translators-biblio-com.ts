// Translator: Biblio.com
// Target: ^https?://www\.biblio\.com/
// TODO: Implement Biblio.com translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-biblio-com.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Biblio.com',
      translatorType: 4,
      target: '^https?://www\.biblio\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-14 21:52:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
