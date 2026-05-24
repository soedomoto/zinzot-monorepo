// Translator: TheMarker
// Target: ^https?://www\.themarker\.com/
// TODO: Implement TheMarker translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-themarker.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'TheMarker',
      translatorType: 4,
      target: '^https?://www\.themarker\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-03 10:47:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
