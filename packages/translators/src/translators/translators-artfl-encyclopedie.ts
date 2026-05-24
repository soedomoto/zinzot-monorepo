// Translator: ARTFL Encyclopedie
// Target: ^https?://artflsrv\d+\.uchicago\.edu/philologic4/encyclopedie\d+/(navigate/|query)
// TODO: Implement ARTFL Encyclopedie translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-artfl-encyclopedie.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ARTFL Encyclopedie',
      translatorType: 4,
      target: '^https?://artflsrv\d+\.uchicago\.edu/philologic4/encyclopedie\d+/(navigate/|query)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-30 19:55:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
