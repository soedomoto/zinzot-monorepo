// Translator: Intellixir
// Target: /intellixir/(afficheliste\.aspx|liste_articles\.aspx)
// TODO: Implement Intellixir translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-intellixir.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Intellixir',
      translatorType: 4,
      target: '/intellixir/(afficheliste\.aspx|liste_articles\.aspx)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2017-01-01 16:54:26',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
