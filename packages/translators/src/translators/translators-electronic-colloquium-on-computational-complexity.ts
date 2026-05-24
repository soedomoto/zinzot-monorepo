// Translator: Electronic Colloquium on Computational Complexity
// Target: ^https?://eccc\.weizmann\.ac\.il/(title|year|keyword|report|search)
// TODO: Implement Electronic Colloquium on Computational Complexity translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-electronic-colloquium-on-computational-complexity.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Electronic Colloquium on Computational Complexity',
      translatorType: 4,
      target: '^https?://eccc\.weizmann\.ac\.il/(title|year|keyword|report|search)',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-14 06:03:23',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
