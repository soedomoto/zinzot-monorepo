// Translator: Informationssystem Medienpaedagogik
// Target: ^https?://www\.ism-info\.de/ism-info\.html\?
// TODO: Implement Informationssystem Medienpaedagogik translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-informationssystem-medienpaedagogik.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Informationssystem Medienpaedagogik',
      translatorType: 4,
      target: '^https?://www\.ism-info\.de/ism-info\.html\?',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 16:54:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
