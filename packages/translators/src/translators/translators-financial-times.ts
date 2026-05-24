// Translator: Financial Times
// Target: ^https?://www\.ft\.com
// TODO: Implement Financial Times translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-financial-times.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Financial Times',
      translatorType: 4,
      target: '^https?://www\.ft\.com',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-03-27 05:16:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
