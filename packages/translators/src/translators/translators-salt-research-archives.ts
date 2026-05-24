// Translator: SALT Research Archives
// Target: ^https?://archives\.saltresearch\.org/
// TODO: Implement SALT Research Archives translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-salt-research-archives.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'SALT Research Archives',
      translatorType: 4,
      target: '^https?://archives\.saltresearch\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-13 22:05:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
