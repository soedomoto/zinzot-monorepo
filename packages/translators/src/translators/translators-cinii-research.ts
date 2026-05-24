// Translator: CiNii Research
// Target: ^https?://cir\.nii\.ac\.jp/
// TODO: Implement CiNii Research translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cinii-research.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CiNii Research',
      translatorType: 4,
      target: '^https?://cir\.nii\.ac\.jp/',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-09-26 14:30:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
