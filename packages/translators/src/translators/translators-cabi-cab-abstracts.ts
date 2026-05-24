// Translator: CABI - CAB Abstracts
// Target: ^https?://(www\.)?cabidirect\.org/cabdirect
// TODO: Implement CABI - CAB Abstracts translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cabi-cab-abstracts.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CABI - CAB Abstracts',
      translatorType: 4,
      target: '^https?://(www\.)?cabidirect\.org/cabdirect',
      minVersion: '3.0.4',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-14 03:41:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
