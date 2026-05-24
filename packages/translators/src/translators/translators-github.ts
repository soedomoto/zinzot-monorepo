// Translator: GitHub
// Target: ^https?://(www\.)?github\.com/([^/]+/[^/]+|search\?)
// TODO: Implement GitHub translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-github.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'GitHub',
      translatorType: 4,
      target: '^https?://(www\.)?github\.com/([^/]+/[^/]+|search\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-29 19:26:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
