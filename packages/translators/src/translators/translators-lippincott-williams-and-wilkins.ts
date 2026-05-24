// Translator: Lippincott Williams and Wilkins
// Target: ^https?://(www\.)?journals\.lww\.com/
// TODO: Implement Lippincott Williams and Wilkins translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-lippincott-williams-and-wilkins.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Lippincott Williams and Wilkins',
      translatorType: 4,
      target: '^https?://(www\.)?journals\.lww\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-09-01 17:23:56',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
