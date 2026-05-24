// Translator: InfoTrac
// Target: ^https?://[^/]+/itw/infomark/
// TODO: Implement InfoTrac translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-infotrac.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'InfoTrac',
      translatorType: 4,
      target: '^https?://[^/]+/itw/infomark/',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:42:55',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
