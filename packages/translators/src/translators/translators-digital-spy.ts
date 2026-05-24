// Translator: Digital Spy
// Target: ^https?://(www\.)?digitalspy\.com
// TODO: Implement Digital Spy translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-digital-spy.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Digital Spy',
      translatorType: 4,
      target: '^https?://(www\.)?digitalspy\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-05-26 19:44:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
