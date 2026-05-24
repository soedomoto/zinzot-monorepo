// Translator: Reuters
// Target: ^https?://\w+\.reuters\.com/
// TODO: Implement Reuters translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-reuters.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Reuters',
      translatorType: 4,
      target: '^https?://\w+\.reuters\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-05 16:50:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
