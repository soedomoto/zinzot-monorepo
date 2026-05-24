// Translator: digibib.net
// Target: ^https?://.*\.digibib\.net/(Digibib|jumpto|metasearch|opensearch|template)
// TODO: Implement digibib.net translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-digibib-net.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'digibib.net',
      translatorType: 4,
      target: '^https?://.*\.digibib\.net/(Digibib|jumpto|metasearch|opensearch|template)',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-05 17:35:41',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
