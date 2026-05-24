// Translator: Hanrei Watch RSS service
// Target: ^https?://kanz\.jp/hanrei/detail/[0-9]+/
// TODO: Implement Hanrei Watch RSS service translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-hanrei-watch-rss-service.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Hanrei Watch RSS service',
      translatorType: 4,
      target: '^https?://kanz\.jp/hanrei/detail/[0-9]+/',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2012-01-30 22:49:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
