// Translator: SlideShare
// Target: ^https?://[^/]*slideshare\.net/
// TODO: Implement SlideShare translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-slideshare.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SlideShare',
      translatorType: 4,
      target: '^https?://[^/]*slideshare\.net/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 15:33:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
