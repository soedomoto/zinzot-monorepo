// Translator: Internet Archive Wayback Machine
// Target: ^https?://web\.archive\.org/web/
// TODO: Implement Internet Archive Wayback Machine translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-internet-archive-wayback-machine.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Internet Archive Wayback Machine',
      translatorType: 4,
      target: '^https?://web\.archive\.org/web/',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-09 19:05:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
