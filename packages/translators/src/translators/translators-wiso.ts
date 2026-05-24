// Translator: wiso
// Target: ^https?://www\.wiso-net\.de/(document/|dosearch\?)
// TODO: Implement wiso translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wiso.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'wiso',
      translatorType: 4,
      target: '^https?://www\.wiso-net\.de/(document/|dosearch\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2016-06-26 18:54:53',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
