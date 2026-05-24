// Translator: Vimeo
// Target: ^https?://(www\.)?vimeo\.com
// TODO: Implement Vimeo translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-vimeo.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Vimeo',
      translatorType: 4,
      target: '^https?://(www\.)?vimeo\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-11 13:37:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
