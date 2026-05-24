// Translator: ASCO Meeting Library
// Target: ^https?://meetinglibrary\.asco\.org/(content|search)
// TODO: Implement ASCO Meeting Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-asco-meeting-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ASCO Meeting Library',
      translatorType: 4,
      target: '^https?://meetinglibrary\.asco\.org/(content|search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 16:47:39',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
