// Translator: Rechtspraak.nl
// Target: ^https?://(uitspraken\.rechtspraak|linkeddata\.overheid)\.nl/
// TODO: Implement Rechtspraak.nl translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-rechtspraak-nl.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Rechtspraak.nl',
      translatorType: 4,
      target: '^https?://(uitspraken\.rechtspraak|linkeddata\.overheid)\.nl/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-01-09 03:25:57',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
