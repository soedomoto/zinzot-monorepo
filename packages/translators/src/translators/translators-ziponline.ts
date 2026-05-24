// Translator: ZIPonline
// Target: ^https?://(www)?\.zip-online\.de/
// TODO: Implement ZIPonline translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ziponline.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ZIPonline',
      translatorType: 4,
      target: '^https?://(www)?\.zip-online\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-27 16:22:25',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
