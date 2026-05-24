// Translator: Optical Society of America
// Target: ^https?://((www\.)?osapublishing|opg\.optica)\.org
// TODO: Implement Optical Society of America translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-optical-society-of-america.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Optical Society of America',
      translatorType: 4,
      target: '^https?://((www\.)?osapublishing|opg\.optica)\.org',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-11-22 16:05:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
