// Translator: American Archive of Public Broadcasting
// Target: ^https?://(www\.)?americanarchive\.org/catalog
// TODO: Implement American Archive of Public Broadcasting translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-american-archive-of-public-broadcasting.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'American Archive of Public Broadcasting',
      translatorType: 4,
      target: '^https?://(www\.)?americanarchive\.org/catalog',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-28 19:23:21',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
