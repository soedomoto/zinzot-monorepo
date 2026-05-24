// Translator: IETF
// Target: ^https?://(datatracker\.ietf\.org/|www\.ietf\.org/archive/id/|tools\.ietf\.org/pdf/|www\.rfc-editor\.org/)
// TODO: Implement IETF translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ietf.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IETF',
      translatorType: 4,
      target: '^https?://(datatracker\.ietf\.org/|www\.ietf\.org/archive/id/|tools\.ietf\.org/pdf/|www\.rfc-editor\.org/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-01-14 12:11:37',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
