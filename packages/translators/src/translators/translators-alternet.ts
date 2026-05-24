// Translator: AlterNet
// Target: ^https?://(www\.)alternet\.org
// TODO: Implement AlterNet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-alternet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AlterNet',
      translatorType: 4,
      target: '^https?://(www\.)alternet\.org',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-01 18:04:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
