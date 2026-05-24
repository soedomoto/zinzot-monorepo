// Translator: newshub.co.nz
// Target: ^https?://www\.newshub\.co\.nz/
// TODO: Implement newshub.co.nz translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-newshub-co-nz.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'newshub.co.nz',
      translatorType: 4,
      target: '^https?://www\.newshub\.co\.nz/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-12-28 20:22:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
