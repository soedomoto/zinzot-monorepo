// Translator: Beobachter
// Target: ^https?://((www\.)?beobachter\.ch/.)
// TODO: Implement Beobachter translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-beobachter.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Beobachter',
      translatorType: 4,
      target: '^https?://((www\.)?beobachter\.ch/.)',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-02-05 20:11:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
