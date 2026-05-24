// Translator: CFF References
// Target: cff
// TODO: Implement CFF References translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cff-references.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CFF References',
      translatorType: 2,
      target: 'cff',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-05-17 20:02:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
