// Translator: Library Hub Discover
// Target: ^https?://(www\.)?discover\.libraryhub\.jisc\.ac\.uk/
// TODO: Implement Library Hub Discover translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-hub-discover.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Hub Discover',
      translatorType: 4,
      target: '^https?://(www\.)?discover\.libraryhub\.jisc\.ac\.uk/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-14 15:57:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
