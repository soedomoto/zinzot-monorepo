// Translator: Web of Science Tagged
// Target: txt
// TODO: Implement Web of Science Tagged translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-web-of-science-tagged.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Web of Science Tagged',
      translatorType: 1,
      target: 'txt',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-06 20:20:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
