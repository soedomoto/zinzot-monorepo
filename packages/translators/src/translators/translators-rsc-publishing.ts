// Translator: RSC Publishing
// Target: ^https?://(:?www\.|google\.)?pubs\.rsc\.org/
// TODO: Implement RSC Publishing translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-rsc-publishing.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'RSC Publishing',
      translatorType: 4,
      target: '^https?://(:?www\.|google\.)?pubs\.rsc\.org/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsb',
      lastUpdated: '2021-06-22 14:44:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
