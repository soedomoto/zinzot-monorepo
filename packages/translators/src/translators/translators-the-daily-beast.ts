// Translator: The Daily Beast
// Target: ^https?://(.*)thedailybeast\.com
// TODO: Implement The Daily Beast translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-daily-beast.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Daily Beast',
      translatorType: 4,
      target: '^https?://(.*)thedailybeast\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-30 06:10:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
