// Translator: Mikromarc
// Target: ^https?://[^/]+\.mikromarc\.no/mikromarc3/
// TODO: Implement Mikromarc translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-mikromarc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Mikromarc',
      translatorType: 4,
      target: '^https?://[^/]+\.mikromarc\.no/mikromarc3/',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-03-07 21:18:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
