// Translator: dhistory
// Target: ^https?://(www\.)?dhistory\.org/archives/naa/items/\d+
// TODO: Implement dhistory translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dhistory.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'dhistory',
      translatorType: 4,
      target: '^https?://(www\.)?dhistory\.org/archives/naa/items/\d+',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2012-08-27 09:42:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
