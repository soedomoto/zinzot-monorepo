// Translator: fishpond.co.nz
// Target: ^https?://www\.fishpond\.co\.nz/
// TODO: Implement fishpond.co.nz translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-fishpond-co-nz.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'fishpond.co.nz',
      translatorType: 4,
      target: '^https?://www\.fishpond\.co\.nz/',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-07 17:26:42',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
