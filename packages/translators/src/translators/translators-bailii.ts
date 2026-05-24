// Translator: BAILII
// Target: ^https?://www\.bailii\.org(/cgi\-bin/markup\.cgi\?doc\=)?/\w+/cases/.+
// TODO: Implement BAILII translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bailii.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BAILII',
      translatorType: 4,
      target: '^https?://www\.bailii\.org(/cgi\-bin/markup\.cgi\?doc\=)?/\w+/cases/.+',
      minVersion: '1.0.0b4.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-16 20:57:17',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
