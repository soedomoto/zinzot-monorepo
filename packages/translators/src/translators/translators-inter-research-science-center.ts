// Translator: Inter-Research Science Center
// Target: ^https?://www\.int-res\.com/
// TODO: Implement Inter-Research Science Center translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-inter-research-science-center.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Inter-Research Science Center',
      translatorType: 4,
      target: '^https?://www\.int-res\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-10-22 20:07:17',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
