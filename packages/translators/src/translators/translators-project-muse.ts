// Translator: Project MUSE
// Target: ^https?://[^/]*muse\.jhu\.edu/(book/|pub/|article/|issue/|search\?)
// TODO: Implement Project MUSE translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-project-muse.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Project MUSE',
      translatorType: 4,
      target: '^https?://[^/]*muse\.jhu\.edu/(book/|pub/|article/|issue/|search\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-08 13:34:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
