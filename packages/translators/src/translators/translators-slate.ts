// Translator: Slate
// Target: ^https?://slate\.com/
// TODO: Implement Slate translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-slate.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Slate',
      translatorType: 4,
      target: '^https?://slate\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-13 21:28:22',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
