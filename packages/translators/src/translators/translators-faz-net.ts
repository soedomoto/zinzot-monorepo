// Translator: FAZ.NET
// Target: ^https?://((www\.)?faz\.net/.)
// TODO: Implement FAZ.NET translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-faz-net.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'FAZ.NET',
      translatorType: 4,
      target: '^https?://((www\.)?faz\.net/.)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-11-11 11:24:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
