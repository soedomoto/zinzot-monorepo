// Translator: ZOBODAT
// Target: ^https?://(www\.)?zobodat\.at/
// TODO: Implement ZOBODAT translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-zobodat.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ZOBODAT',
      translatorType: 4,
      target: '^https?://(www\.)?zobodat\.at/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-10-17 11:17:19',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
