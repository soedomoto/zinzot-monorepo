// Translator: JETS
// Target: ^https?://(www\.)?etsjets\.org/
// TODO: Implement JETS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-jets.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'JETS',
      translatorType: 4,
      target: '^https?://(www\.)?etsjets\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-18 00:00:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
