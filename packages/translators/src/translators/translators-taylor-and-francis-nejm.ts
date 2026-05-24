// Translator: Taylor and Francis+NEJM
// Target: ^https?://(www\.)?(tandfonline\.com|nejm\.org)/
// TODO: Implement Taylor and Francis+NEJM translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-taylor-and-francis-nejm.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Taylor and Francis+NEJM',
      translatorType: 4,
      target: '^https?://(www\.)?(tandfonline\.com|nejm\.org)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-12-03 20:05:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
