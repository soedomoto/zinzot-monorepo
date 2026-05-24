// Translator: AustLII and NZLII
// Target: ^https?://(www\d?|classic)\.(austlii\.edu\.au|nzlii\.org)
// TODO: Implement AustLII and NZLII translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-austlii-and-nzlii.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AustLII and NZLII',
      translatorType: 4,
      target: '^https?://(www\d?|classic)\.(austlii\.edu\.au|nzlii\.org)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-11-21 19:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
