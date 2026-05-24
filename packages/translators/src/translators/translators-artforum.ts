// Translator: Artforum
// Target: ^https?://(www\.)?artforum\.com/
// TODO: Implement Artforum translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-artforum.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Artforum',
      translatorType: 4,
      target: '^https?://(www\.)?artforum\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-02 00:33:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
