// Translator: Clinical Key
// Target: ^https?://(www\.|www-)clinicalkey(\.|-)com
// TODO: Implement Clinical Key translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-clinical-key.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Clinical Key',
      translatorType: 4,
      target: '^https?://(www\.|www-)clinicalkey(\.|-)com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-30 08:08:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
