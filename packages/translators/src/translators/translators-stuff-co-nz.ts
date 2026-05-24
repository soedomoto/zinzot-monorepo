// Translator: Stuff.co.nz
// Target: ^https?://(www\.)?stuff\.co\.nz/
// TODO: Implement Stuff.co.nz translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-stuff-co-nz.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Stuff.co.nz',
      translatorType: 4,
      target: '^https?://(www\.)?stuff\.co\.nz/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-08-23 05:56:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
