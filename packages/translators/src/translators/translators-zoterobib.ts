// Translator: ZoteroBib
// Target: ^https://zbib\.org/
// TODO: Implement ZoteroBib translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-zoterobib.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ZoteroBib',
      translatorType: 4,
      target: '^https://zbib\.org/',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-23 02:34:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
