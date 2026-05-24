// Translator: New Zealand Herald
// Target: ^https?://www\.nzherald\.co\.nz
// TODO: Implement New Zealand Herald translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-new-zealand-herald.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'New Zealand Herald',
      translatorType: 4,
      target: '^https?://www\.nzherald\.co\.nz',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-13 22:55:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
