// Translator: National Agriculture Library
// Target: ^https?://(pubag|naldc)\.nal\.usda\.gov/
// TODO: Implement National Agriculture Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-agriculture-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Agriculture Library',
      translatorType: 4,
      target: '^https?://(pubag|naldc)\.nal\.usda\.gov/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-11 22:01:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
