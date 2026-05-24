// Translator: DBpia
// Target: ^https?://[^/]+\.dbpia\.co\.kr/
// TODO: Implement DBpia translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dbpia.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DBpia',
      translatorType: 4,
      target: '^https?://[^/]+\.dbpia\.co\.kr/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-14 00:23:40',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
