// Translator: Perlego
// Target: ^https?://(www\.)?perlego\.com
// TODO: Implement Perlego translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-perlego.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Perlego',
      translatorType: 4,
      target: '^https?://(www\.)?perlego\.com',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-04-26 14:52:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
