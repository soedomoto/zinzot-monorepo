// Translator: Canada.com
// Target: ^https?://www\.canada\.com
// TODO: Implement Canada.com translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-canada-com.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Canada.com',
      translatorType: 4,
      target: '^https?://www\.canada\.com',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:34:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
