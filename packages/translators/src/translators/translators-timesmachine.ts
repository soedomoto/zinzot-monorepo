// Translator: TimesMachine
// Target: ^https?://timesmachine\.nytimes\.com/timesmachine/
// TODO: Implement TimesMachine translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-timesmachine.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'TimesMachine',
      translatorType: 4,
      target: '^https?://timesmachine\.nytimes\.com/timesmachine/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-26 18:04:55',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
