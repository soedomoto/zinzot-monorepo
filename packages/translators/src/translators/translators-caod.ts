// Translator: CAOD
// Target: ^https?://caod\.oriprobe\.com/articles/
// TODO: Implement CAOD translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-caod.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CAOD',
      translatorType: 4,
      target: '^https?://caod\.oriprobe\.com/articles/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-09-08 13:38:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
