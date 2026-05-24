// Translator: Der Freitag
// Target: ^https?://www\.freitag\.de
// TODO: Implement Der Freitag translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-der-freitag.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Der Freitag',
      translatorType: 4,
      target: '^https?://www\.freitag\.de',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-04-15 16:29:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
