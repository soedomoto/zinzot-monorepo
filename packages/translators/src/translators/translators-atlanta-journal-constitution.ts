// Translator: Atlanta Journal-Constitution
// Target: ^https?://(www\.)?ajc\.com
// TODO: Implement Atlanta Journal-Constitution translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-atlanta-journal-constitution.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Atlanta Journal-Constitution',
      translatorType: 4,
      target: '^https?://(www\.)?ajc\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-14 19:41:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
