// Translator: Encyclopedia of Korean Culture
// Target: ^https?://(www\.)?encykorea\.aks\.ac\.kr/Article/
// TODO: Implement Encyclopedia of Korean Culture translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-encyclopedia-of-korean-culture.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Encyclopedia of Korean Culture',
      translatorType: 4,
      target: '^https?://(www\.)?encykorea\.aks\.ac\.kr/Article/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-09-15 20:07:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
