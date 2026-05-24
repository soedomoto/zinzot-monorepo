// Translator: PyPI
// Target: ^https?://pypi\.org/(project|search)
// TODO: Implement PyPI translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pypi.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PyPI',
      translatorType: 4,
      target: '^https?://pypi\.org/(project|search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-11-03 08:21:27',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
