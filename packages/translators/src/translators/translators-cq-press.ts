// Translator: CQ Press
// Target: ^https?://library\.cqpress\.com/
// TODO: Implement CQ Press translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-cq-press.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CQ Press',
      translatorType: 4,
      target: '^https?://library\.cqpress\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-01 21:06:24',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
