// Translator: ASCE
// Target: ^https?://(www\.)?ascelibrary\.org/(toc|doi|action)/
// TODO: Implement ASCE translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-asce.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ASCE',
      translatorType: 4,
      target: '^https?://(www\.)?ascelibrary\.org/(toc|doi|action)/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-06-28 02:29:25',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
