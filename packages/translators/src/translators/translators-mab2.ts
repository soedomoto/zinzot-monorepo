// Translator: MAB2
// Target: mab2
// TODO: Implement MAB2 translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-mab2.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'MAB2',
      translatorType: 1,
      target: 'mab2',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2014-05-20 17:57:47',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
