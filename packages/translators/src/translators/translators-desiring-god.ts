// Translator: Desiring God
// Target: ^https?://(www\.)?desiringgod\.org/
// TODO: Implement Desiring God translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-desiring-god.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Desiring God',
      translatorType: 4,
      target: '^https?://(www\.)?desiringgod\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-11 17:20:18',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
