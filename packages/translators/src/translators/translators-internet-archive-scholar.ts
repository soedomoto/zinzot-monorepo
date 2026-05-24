// Translator: Internet Archive Scholar
// Target: ^https://scholar\.archive\.org/
// TODO: Implement Internet Archive Scholar translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-internet-archive-scholar.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Internet Archive Scholar',
      translatorType: 4,
      target: '^https://scholar\.archive\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-22 07:47:04',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
