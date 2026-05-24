// Translator: Gale Databases
// Target: ^https?://[^?&]*(?:gale|galegroup|galetesting|ggtest)\.com(?:\:\d+)?/ps/
// TODO: Implement Gale Databases translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-gale-databases.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Gale Databases',
      translatorType: 4,
      target: '^https?://[^?&]*(?:gale|galegroup|galetesting|ggtest)\.com(?:\:\d+)?/ps/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-21 04:18:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
