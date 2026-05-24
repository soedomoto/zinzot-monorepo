// Translator: Galegroup
// Target: ^https?://(find\.galegroup\.com/|go\.galegroup\.com/gdsc)
// TODO: Implement Galegroup translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-galegroup.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Galegroup',
      translatorType: 4,
      target: '^https?://(find\.galegroup\.com/|go\.galegroup\.com/gdsc)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-10-07 16:06:56',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
