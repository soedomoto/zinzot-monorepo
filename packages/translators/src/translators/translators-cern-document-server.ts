// Translator: CERN Document Server
// Target: ^https?://cds\.cern\.ch/(search\?|collection/|record/)
// TODO: Implement CERN Document Server translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cern-document-server.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CERN Document Server',
      translatorType: 4,
      target: '^https?://cds\.cern\.ch/(search\?|collection/|record/)',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-04-13 01:12:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
