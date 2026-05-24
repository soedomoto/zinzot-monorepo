// Translator: KStudy
// Target: ^https?://[^/]+\.kstudy\.com
// TODO: Implement KStudy translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-kstudy.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'KStudy',
      translatorType: 4,
      target: '^https?://[^/]+\.kstudy\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-03 13:10:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
