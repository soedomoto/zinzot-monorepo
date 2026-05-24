// Translator: HCSP
// Target: ^https?://(www\.)?hcsp\.fr/explore\.cgi/
// TODO: Implement HCSP translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-hcsp.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'HCSP',
      translatorType: 4,
      target: '^https?://(www\.)?hcsp\.fr/explore\.cgi/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-10-31 19:16:45',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
