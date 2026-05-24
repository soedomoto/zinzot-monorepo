// Translator: National Academies Press
// Target: ^https?://nap\.nationalacademies\.org/
// TODO: Implement National Academies Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-academies-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Academies Press',
      translatorType: 4,
      target: '^https?://nap\.nationalacademies\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-12-12 19:59:23',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
