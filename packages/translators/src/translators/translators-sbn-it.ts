// Translator: sbn.it
// Target: ^https?://(www|opac)\.sbn\.it/opacsbn/opaclib
// TODO: Implement sbn.it translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sbn-it.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'sbn.it',
      translatorType: 4,
      target: '^https?://(www|opac)\.sbn\.it/opacsbn/opaclib',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-12-27 16:51:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
