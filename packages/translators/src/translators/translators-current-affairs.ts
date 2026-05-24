// Translator: Current Affairs
// Target: ^https?://www\.currentaffairs\.org/
// TODO: Implement Current Affairs translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-current-affairs.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Current Affairs',
      translatorType: 4,
      target: '^https?://www\.currentaffairs\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-07 00:42:35',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
