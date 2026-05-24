// Translator: Légifrance
// Target: ^https?://(www\.)?legifrance\.gouv\.fr/
// TODO: Implement Légifrance translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-l-gifrance.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Légifrance',
      translatorType: 4,
      target: '^https?://(www\.)?legifrance\.gouv\.fr/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 16:46:17',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
