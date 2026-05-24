// Translator: Web of Science Nextgen
// Target: ^https://(www\.webofscience\.com|webofscience\.clarivate\.cn)/
// TODO: Implement Web of Science Nextgen translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-web-of-science-nextgen.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Web of Science Nextgen',
      translatorType: 4,
      target: '^https://(www\.webofscience\.com|webofscience\.clarivate\.cn)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-03-06 20:20:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
