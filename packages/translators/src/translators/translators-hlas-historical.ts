// Translator: HLAS (historical)
// Target: ^https?://lcweb2\.loc\.gov/cgi-bin/query
// TODO: Implement HLAS (historical) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-hlas-historical.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'HLAS (historical)',
      translatorType: 4,
      target: '^https?://lcweb2\.loc\.gov/cgi-bin/query',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2013-06-01 14:47:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
