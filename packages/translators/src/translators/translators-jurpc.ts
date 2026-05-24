// Translator: JurPC
// Target: ^https?://www\.jurpc\.de/jurpc/show\?id=
// TODO: Implement JurPC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-jurpc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'JurPC',
      translatorType: 4,
      target: '^https?://www\.jurpc\.de/jurpc/show\?id=',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 18:03:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
