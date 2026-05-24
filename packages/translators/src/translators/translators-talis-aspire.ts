// Translator: Talis Aspire
// Target: ^https?://([^/]+\.)?(((my)?reading|resource|lib|cyprus|)lists|aspire\.surrey|rl\.talis)\..+/(lists|items)/
// TODO: Implement Talis Aspire translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-talis-aspire.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Talis Aspire',
      translatorType: 4,
      target: '^https?://([^/]+\.)?(((my)?reading|resource|lib|cyprus|)lists|aspire\.surrey|rl\.talis)\..+/(lists|items)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 270,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-08 16:59:21',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
