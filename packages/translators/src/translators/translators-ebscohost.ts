// Translator: EBSCOhost
// Target: ^https?://[^/]+/(eds|bsi|ehost)/(results|detail|folder|pdfviewer)
// TODO: Implement EBSCOhost translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ebscohost.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'EBSCOhost',
      translatorType: 4,
      target: '^https?://[^/]+/(eds|bsi|ehost)/(results|detail|folder|pdfviewer)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-04-15 01:50:53',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
