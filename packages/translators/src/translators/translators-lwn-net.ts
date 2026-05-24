// Translator: LWN.net
// Target: ^https?://lwn\.net/
// TODO: Implement LWN.net translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-lwn-net.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'LWN.net',
      translatorType: 4,
      target: '^https?://lwn\.net/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-26 17:35:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
