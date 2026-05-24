// Translator: DSpace Intermediate Metadata
// Target: xml
// TODO: Implement DSpace Intermediate Metadata translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dspace-intermediate-metadata.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DSpace Intermediate Metadata',
      translatorType: 1,
      target: 'xml',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-24 19:29:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
