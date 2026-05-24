// Translator: Project Gutenberg
// Target: ^https?://www\.gutenberg\.org
// TODO: Implement Project Gutenberg translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-project-gutenberg.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Project Gutenberg',
      translatorType: 4,
      target: '^https?://www\.gutenberg\.org',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-04-03 18:55:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
