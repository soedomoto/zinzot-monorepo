// Translator: Verniana-Jules Verne Studies
// Target: ^https?://[^/]*verniana\.org(:\d+)?/volumes/\d+/
// TODO: Implement Verniana-Jules Verne Studies translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-verniana-jules-verne-studies.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Verniana-Jules Verne Studies',
      translatorType: 4,
      target: '^https?://[^/]*verniana\.org(:\d+)?/volumes/\d+/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-17 13:39:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
