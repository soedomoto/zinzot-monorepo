// Translator: International Nuclear Information System
// Target: ^https?://inis\.iaea\.org/
// TODO: Implement International Nuclear Information System translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-international-nuclear-information-system.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'International Nuclear Information System',
      translatorType: 4,
      target: '^https?://inis\.iaea\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-12 23:15:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
