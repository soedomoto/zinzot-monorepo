// Translator: Dialnet
// Target: ^https?://dialnet\.unirioja\.es/
// TODO: Implement Dialnet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dialnet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Dialnet',
      translatorType: 4,
      target: '^https?://dialnet\.unirioja\.es/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-01-05 20:54:41',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
