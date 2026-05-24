// Translator: Winnipeg Free Press
// Target: ^https?://www\.winnipegfreepress\.com
// TODO: Implement Winnipeg Free Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-winnipeg-free-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Winnipeg Free Press',
      translatorType: 4,
      target: '^https?://www\.winnipegfreepress\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-17 17:27:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
