// Translator: SSRN
// Target: ^https?://(www|papers|hq)\.ssrn\.com/
// TODO: Implement SSRN translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ssrn.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SSRN',
      translatorType: 4,
      target: '^https?://(www|papers|hq)\.ssrn\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-04-04 18:26:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
