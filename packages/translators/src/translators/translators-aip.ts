// Translator: AIP
// Target: ^https?://scitation\.aip\.org/(search\?|content/)
// TODO: Implement AIP translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-aip.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AIP',
      translatorType: 4,
      target: '^https?://scitation\.aip\.org/(search\?|content/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2015-10-17 17:37:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
