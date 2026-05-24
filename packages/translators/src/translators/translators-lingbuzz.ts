// Translator: LingBuzz
// Target: ^https://(ling\.auf|lingbuzz)\.net/lingbuzz/(repo/semanticsArchive/article/)?(\d+|_search)
// TODO: Implement LingBuzz translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-lingbuzz.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'LingBuzz',
      translatorType: 4,
      target: '^https://(ling\.auf|lingbuzz)\.net/lingbuzz/(repo/semanticsArchive/article/)?(\d+|_search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-05-04 01:00:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
