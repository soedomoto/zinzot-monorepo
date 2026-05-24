// Translator: BioMed Central
// Target: ^https?://[^\.]+\.(biomedcentral|springeropen)\.com/(articles|search)
// TODO: Implement BioMed Central translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-biomed-central.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BioMed Central',
      translatorType: 4,
      target: '^https?://[^\.]+\.(biomedcentral|springeropen)\.com/(articles|search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-12-01 16:45:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
