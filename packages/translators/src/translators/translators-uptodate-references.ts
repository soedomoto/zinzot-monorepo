// Translator: UpToDate References
// Target: ^https?://www\.uptodate\.com/contents/
// TODO: Implement UpToDate References translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-uptodate-references.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'UpToDate References',
      translatorType: 4,
      target: '^https?://www\.uptodate\.com/contents/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcv',
      lastUpdated: '2019-06-11 13:44:39',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
