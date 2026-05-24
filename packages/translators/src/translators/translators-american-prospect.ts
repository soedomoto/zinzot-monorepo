// Translator: American Prospect
// Target: ^https?://(www\.)?prospect\.org
// TODO: Implement American Prospect translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-american-prospect.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'American Prospect',
      translatorType: 4,
      target: '^https?://(www\.)?prospect\.org',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsib',
      lastUpdated: '2013-01-09 15:36:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
