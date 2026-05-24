// Translator: El Pais
// Target: ^https?://([^.]\.)?elpais\.com/
// TODO: Implement El Pais translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-el-pais.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'El Pais',
      translatorType: 4,
      target: '^https?://([^.]\.)?elpais\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-07 16:59:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
